<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//* Classes
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Auth\RefreshController;

use App\Http\Controllers\Post\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//* Auth API Routes
Route::prefix('auth')->group(function () 
{
    Route::post('login',    LoginController::class);
    Route::post('logout',   LogoutController::class);
    Route::post('refresh',  RefreshController::class);
    Route::post('register', RegisterController::class);
    Route::get('profile',  ProfileController::class);
});

//* Post API Routes
Route::prefix('posts')->group(function () 
{
    Route::get('',            [PostController::class, 'index']);
    Route::get('{slug}',      [PostController::class, 'show']);
    Route::post('create',     [PostController::class, 'store']);
    Route::put('{slug}',      [PostController::class, 'update']); 
    Route::delete('{slug}',   [PostController::class, 'destroy']);
});
