<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//===============Register Login Logout====================
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


//===============Register Login Logout====================


//======================Admin==============================
Route::middleware(['auth:sanctum', 'isApiAdmin'])->group(function() {
    //protected
    Route::get('/checkingAuthenticated', function() {
        return response()->json(['message' => 'You are in', 'status'=>200], 200);
    });
});
//======================Admin==============================

Route::middleware(['auth:sanctum'])->group(function() {
    Route::post('logout', [AuthController::class, 'logout']);
});




/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/