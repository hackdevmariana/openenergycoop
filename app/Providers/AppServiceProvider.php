<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot()
    {
        Inertia::share([
            'csrf_token' => fn() => csrf_token(),
            'canLogin' => fn() => Route::has('login'),
            'canRegister' => fn() => Route::has('register'),
            'theme' => fn() => session('theme', 'light'),
        ]);
    }
}
