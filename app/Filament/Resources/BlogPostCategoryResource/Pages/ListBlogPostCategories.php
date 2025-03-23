<?php

declare(strict_types=1);

namespace App\Filament\Resources\BlogPostCategoryResource\Pages;

use App\Filament\Resources\BlogPostCategoryResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

final class ListBlogPostCategories extends ListRecords
{
    protected static string $resource = BlogPostCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
