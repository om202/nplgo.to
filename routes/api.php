<?php

use App\Http\Controllers\Api\UrlApiController;
use App\Http\Middleware\ValidateApiToken;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Service-to-service API for Noble Stack ecosystem apps.
| All routes require a valid Bearer token.
|
*/

Route::prefix('v1')
    ->middleware(ValidateApiToken::class)
    ->group(function () {
        Route::post('/shorten', [UrlApiController::class, 'shorten']);
    });
