<?php

declare(strict_types=1);

use App\Http\Controllers\Admin\Auth\ForgotPasswordController;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\Auth\PasswordController;
use App\Http\Controllers\Admin\Auth\ResetPasswordController;
use App\Http\Controllers\Admin\BlogPostCategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GetPackageRepoDataController;
use App\Http\Controllers\Admin\IndexController;
use App\Http\Controllers\Admin\PackageCategoryController;
use App\Http\Controllers\Admin\PackageController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\ToggleStatusController;
use App\Http\Middleware\AdminAuthMiddleware;
use Illuminate\Support\Facades\Route;

Route::middleware('guest:admin')->group(function () {
    // Admin Login
    Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
    Route::post('login', [LoginController::class, 'login']);

    // Password Reset
    Route::get('password/reset', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.request');
    Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
    Route::get('password/reset/{token}', [ResetPasswordController::class, 'showResetForm'])->name('password.reset');
    Route::post('password/reset', [ResetPasswordController::class, 'reset'])->name('password.reset.update');
});

// Protected routes for admins
Route::middleware(AdminAuthMiddleware::class)->group(function () {
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');

    Route::get('/', DashboardController::class)->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::resource('indexes', IndexController::class);

    Route::put('toggle-status/{model}', ToggleStatusController::class)->name('toggle-status');

    Route::prefix('packages')
        ->as('packages.')
        ->group(function () {
            Route::resource('packages', PackageController::class);
            Route::get('get-repository-data', GetPackageRepoDataController::class)
                ->name('get-repository-data');
            Route::resource('categories', PackageCategoryController::class);
        });

    Route::prefix('blog-posts')
        ->as('blog-posts.')
        ->group(function () {
            Route::resource('categories', BlogPostCategoryController::class);
        });
});
