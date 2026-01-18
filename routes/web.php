<?php

use App\Http\Controllers\RedirectController;
use App\Http\Controllers\UrlController;
use Illuminate\Support\Facades\Route;

Route::get('/', [UrlController::class, 'create'])->name('home');
Route::post('/', [UrlController::class, 'store'])->name('urls.store');
Route::get('/{code}', RedirectController::class)->name('redirect');
