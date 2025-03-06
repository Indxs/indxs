<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages\ViewCategory;
use App\Filament\Resources\PackageCategoryResource\Pages;
use App\Filament\Resources\PackageRelationManagerResource\RelationManagers\PackagesRelationManager;
use App\Models\Category;
use App\Models\Package;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Str;

class PackageCategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?string $label = 'Package Categories';

    protected static ?string $navigationGroup = 'Packages';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->where('category_type', Package::class);
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(3)
                    ->schema([
                        Forms\Components\Grid::make(1)
                            ->columnSpan(2)
                            ->schema([
                                Forms\Components\Section::make('Category Information')
                                    ->columns(2)
                                    ->schema([
                                        Forms\Components\TextInput::make('name')
                                            ->live(onBlur: true)
                                            ->required()
                                            ->maxLength(255)
                                            ->afterStateUpdated(function (Set $set, ?string $state) {
                                                $set('slug', Str::slug($state));
                                            }),
                                        Forms\Components\TextInput::make('slug')
                                            ->required()
                                            ->disabled()
                                            ->maxLength(255),
                                    ]),

                                Forms\Components\Section::make('SEO Meta Information')
                                    ->schema([
                                        Forms\Components\TextInput::make('meta_title')
                                            ->maxLength(255),
                                        Forms\Components\Textarea::make('meta_description')
                                            ->maxLength(255),
                                    ]),
                            ]),
                        Forms\Components\Grid::make(1)
                            ->columnSpan(1)
                            ->schema([
                                Forms\Components\Section::make('Status')
                                    ->schema([
                                        Forms\Components\Hidden::make('category_type')
                                            ->default(Package::class),
                                        Forms\Components\Toggle::make('status')
                                            ->default('active')
                                            ->onIcon('heroicon-o-check-circle')
                                            ->offIcon('heroicon-o-x-circle')
                                            ->onColor('success')
                                            ->offColor('danger')
                                            ->afterStateHydrated(fn ($state, callable $set) => $set('status', $state === 'active')),
                                    ]),
                            ]),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->persistFiltersInSession()
            ->filtersTriggerAction(function ($action) {
                return $action->button()->label('Filters');
            })
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('packages')
                    ->formatStateUsing(fn (Category $category) => $category->packages->count() ?? 0)
                    ->sortable(),
                Tables\Columns\ToggleColumn::make('status')
                    ->onIcon('heroicon-o-check-circle')
                    ->offIcon('heroicon-o-x-circle')
                    ->onColor('success')
                    ->offColor('danger')
                    ->sortable()
                    ->toggleable()
                    ->getStateUsing(fn ($record) => $record->status === 'active')
                    ->beforeStateUpdated(function ($record, $state) {
                        Notification::make()
                            ->title('Status Updated')
                            ->body('The status has been changed to '.($state ? 'Active' : 'Inactive'))
                            ->success()
                            ->send();
                    }),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->label('Status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                    ]),
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make()
                    ->slideOver(),
                Tables\Actions\ViewAction::make(),
                Tables\Actions\Action::make('delete')
                    ->label('Delete')
                    ->icon('heroicon-o-trash')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->action(fn (Category $category) => $category->delete())
                    ->visible(fn (Category $category) => ! $category->trashed()),

                Tables\Actions\RestoreAction::make()
                    ->requiresConfirmation()
                    ->visible(fn (Category $category) => $category->trashed()),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            PackagesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPackageCategories::route('/'),
            'create' => Pages\CreatePackageCategory::route('/create'),
            // 'edit' => Pages\EditPackageCategory::route('/{record}/edit'),
            'view' => ViewCategory::route('/{record}'),
        ];
    }
}
