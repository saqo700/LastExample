<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

Route::group([

    'prefix' => 'auth',

], function ($router) {

    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);

});

    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::patch('/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::delete('/destroy', [UserController::class, 'destroy'])->name('users.destroy');
    Route::get('/users/user', [UserController::class, 'show'])->name('users.show');
    Route::post('/verify', [UserController::class,  'emailVerify'])->name('emailVerify');




