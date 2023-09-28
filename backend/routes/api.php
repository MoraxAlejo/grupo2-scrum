<?php

use App\Http\Controllers\EvaluacionController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::controller(EvaluacionController::class)->group(function () {
    Route::get('/evaluacion', 'index');
    Route::get('/evaluacion/{id}', 'show');
    Route::post('/evaluacion', 'store');
    Route::put('/evaluacion/{id}', 'edit');
    Route::delete('/evaluacion/{id}', 'destroy');
   
});