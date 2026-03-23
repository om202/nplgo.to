<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BioPageController;
use App\Http\Controllers\BioPagePublicController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\RedirectController;
use App\Http\Controllers\RootAdminController;
use App\Http\Controllers\UrlController;
use Illuminate\Support\Facades\Route;

Route::get('/', [UrlController::class, 'create'])->name('home');
Route::post('/', [UrlController::class, 'store'])->name('urls.store');

// Process pending URL after login
Route::get('/urls/process-pending', [UrlController::class, 'processPending'])
    ->middleware('auth')
    ->name('urls.process-pending');

// Google OAuth
Route::get('/auth/google', [GoogleAuthController::class, 'redirect'])->name('auth.google');
Route::get('/auth/google/callback', [GoogleAuthController::class, 'callback']);
Route::post('/logout', [GoogleAuthController::class, 'logout'])->name('logout');

// Legal Pages
Route::get('/privacy', fn() => inertia('PrivacyPolicy'))->name('privacy');
Route::get('/terms', fn() => inertia('TermsOfService'))->name('terms');

// SEO Pages
Route::get('/about', fn() => inertia('About'))->name('about');
Route::get('/features', fn() => inertia('Features'))->name('features');
Route::get('/how-to-shorten-url', fn() => inertia('HowToShorten'))->name('how-to-shorten');
Route::get('/qr-code-generator', fn() => inertia('QrCodeGenerator'))->name('qr-code-generator');
Route::get('/url-shortener', fn() => inertia('UrlShortener'))->name('url-shortener');

// Bio Page (public) - Must be before the catch-all redirect
Route::get('/@{username}', [BioPagePublicController::class, 'show'])->name('bio.public');

// Admin (auth required)
Route::middleware('auth')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');
    Route::delete('/admin/urls/{url}', [AdminController::class, 'destroy'])->name('admin.urls.destroy');

    // Root Admin Panel (admin only)
    Route::get('/root-admin', [RootAdminController::class, 'index'])->name('root-admin');

    // Bio Page Management
    Route::get('/bio', [BioPageController::class, 'edit'])->name('bio.edit');
    Route::put('/bio', [BioPageController::class, 'update'])->name('bio.update');
    Route::post('/bio/links', [BioPageController::class, 'storeLink'])->name('bio.links.store');
    Route::put('/bio/links/{bioLink}', [BioPageController::class, 'updateLink'])->name('bio.links.update');
    Route::delete('/bio/links/{bioLink}', [BioPageController::class, 'destroyLink'])->name('bio.links.destroy');
    Route::put('/bio/links-order', [BioPageController::class, 'reorderLinks'])->name('bio.links.reorder');
});

Route::get('/{code}', RedirectController::class)->name('redirect');
