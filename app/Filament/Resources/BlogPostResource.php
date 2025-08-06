<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogPostResource\Pages;
use App\Models\BlogPost;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class BlogPostResource extends Resource
{
    protected static ?string $model = BlogPost::class;

    protected static ?string $navigationGroup = 'Blog';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->latest('published_at');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema(BlogPost::getFormSchema());
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->limit(30)
                    ->tooltip(function (Tables\Columns\TextColumn $column): ?string {
                        $state = $column->getState();
                        if (strlen($state) <= 30) {
                            return null;
                        }

                        return $state;
                    }),
                Tables\Columns\TextColumn::make('categories.name')
                    ->badge()
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\SpatieMediaLibraryImageColumn::make('image'),
                Tables\Columns\TextColumn::make('status')
                    ->searchable(),
                Tables\Columns\TextColumn::make('unique_views_count')
                    ->label('Views')
                    ->badge()
                    ->color('success')
                    ->sortable()
                    ->getStateUsing(fn (BlogPost $record) => $record->unique_views_count),
                Tables\Columns\TextColumn::make('published_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('scheduled_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->relationship('categories', 'name')
                    ->multiple()
                    ->searchable()
                    ->preload(),
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'drafted' => 'Drafted',
                        'scheduled' => 'Scheduled',
                        'published' => 'Published',
                    ])
                    ->default('published'),
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\Action::make('View')
                    ->icon('heroicon-o-eye')
                    ->color('secondary')
                    ->url(fn (BlogPost $record) => route('blog.show', $record->slug))
                    ->openUrlInNewTab(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('delete')
                    ->label('Delete')
                    ->icon('heroicon-o-trash')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->action(fn (BlogPost $post) => $post->delete())
                    ->visible(fn (BlogPost $post) => ! $post->trashed()),

                Tables\Actions\RestoreAction::make()
                    ->requiresConfirmation()
                    ->visible(fn (BlogPost $post) => $post->trashed()),
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogPosts::route('/'),
            'create' => Pages\CreateBlogPost::route('/create'),
            'edit' => Pages\EditBlogPost::route('/{record}/edit'),
        ];
    }
}
