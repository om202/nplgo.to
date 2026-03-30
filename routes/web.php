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
Route::get('/link-in-bio', fn() => inertia('LinkInBio'))->name('link-in-bio');

// Blog
Route::get('/blog', function () {
    $meta = [
        'title' => 'Blog | npgo.to',
        'description' => 'Tips, guides, and insights on URL shortening, QR code generation, and digital marketing for Nepali businesses.',
        'image' => url('/images/og-image.webp'),
        'url' => url()->current(),
    ];
    return inertia('Blog', ['meta' => $meta]);
})->name('blog');

Route::get('/blog/{slug}', function ($slug) {
    $path = resource_path("content/blog/{$slug}/index.md");
    if (!file_exists($path)) abort(404);

    $content = file_get_contents($path);
    preg_match('/title:\s*"([^"]+)"/', $content, $t);
    preg_match('/description:\s*"([^"]+)"/', $content, $d);

    $meta = [
        'title' => ($t[1] ?? 'Blog Post') . ' | npgo.to',
        'description' => $d[1] ?? 'Read our latest blog post on url shortening and digital marketing in Nepal.',
        'image' => url('/images/og-image.webp'),
        'url' => url()->current(),
    ];

    return inertia('BlogPost', [
        'slug' => $slug,
        'meta' => $meta
    ]);
})->name('blog.post');
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
    Route::post('/bio/avatar', [BioPageController::class, 'uploadAvatar'])->name('bio.avatar.upload');
    Route::delete('/bio/avatar', [BioPageController::class, 'removeAvatar'])->name('bio.avatar.destroy');
    Route::post('/bio/links', [BioPageController::class, 'storeLink'])->name('bio.links.store');
    Route::put('/bio/links/{bioLink}', [BioPageController::class, 'updateLink'])->name('bio.links.update');
    Route::delete('/bio/links/{bioLink}', [BioPageController::class, 'destroyLink'])->name('bio.links.destroy');
    Route::put('/bio/links-order', [BioPageController::class, 'reorderLinks'])->name('bio.links.reorder');
});

Route::get('/{code}', RedirectController::class)->name('redirect');
