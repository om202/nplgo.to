<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\RedirectController;
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

// Admin (auth required)
Route::middleware('auth')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');
    Route::delete('/admin/urls/{url}', [AdminController::class, 'destroy'])->name('admin.urls.destroy');
});

Route::get('/{code}', RedirectController::class)->name('redirect');
