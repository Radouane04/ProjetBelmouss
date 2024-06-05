<?php

use App\Http\Controllers\MenuisierController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\BoisController;



Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
// routes/api.php


Route::post('/appointments', [AppointmentController::class, 'store']);
Route::post('/appointments', [AppointmentController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/bois', [BoisController::class, 'index']);


Route::post('/cart', [CartController::class, 'addToCart']);
Route::get('/cart', [CartController::class, 'showCart']);
Route::delete('/cart/{id}', [CartController::class, 'destroy']);
Route::put('/cart/{id}', [CartController::class, 'updateQuantity']);
Route::post('/cart/validate', [CartController::class, 'validateCart']);
Route::post('/commands', [CartController::class, 'validateCartAndCreateOrder']);



Route::get('/menuisiers', [MenuisierController::class, 'index']);
Route::post('/menuisiers', [MenuisierController::class, 'store']);
Route::put('/menuisiers/{menuisier}', [MenuisierController::class, 'update']);
Route::delete('/menuisiers/{menuisier}', [MenuisierController::class, 'destroy']);
Route::get('/appointments/{appointments}/menuisiers',[MenuisierController::class,'getMenuisierbyAppointement']);