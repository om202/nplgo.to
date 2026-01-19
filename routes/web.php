<?php

use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\RedirectController;
use App\Http\Controllers\UrlController;
use Illuminate\Support\Facades\Route;

Route::get('/', [UrlController::class, 'create'])->name('home');
Route::post('/', [UrlController::class, 'store'])->name('urls.store');

// Google OAuth
Route::get('/auth/google', [GoogleAuthController::class, 'redirect'])->name('auth.google');
Route::get('/auth/google/callback', [GoogleAuthController::class, 'callback']);
Route::post('/logout', [GoogleAuthController::class, 'logout'])->name('logout');

// Admin (auth required)
Route::get('/admin', function () {
    return inertia('Admin');
})->middleware('auth')->name('admin');

Route::get('/{code}', RedirectController::class)->name('redirect');


