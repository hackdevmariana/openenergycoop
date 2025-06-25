<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AppSettingController;

Route::prefix('v1')->group(function () {
    Route::get('/app-settings/{organizationId}', [AppSettingController::class, 'show']);

    Route::middleware('auth:sanctum')->put('/app-settings/{organizationId}', [AppSettingController::class, 'update']);
});
