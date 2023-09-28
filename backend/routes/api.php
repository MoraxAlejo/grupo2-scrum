<?php

use App\Http\Controllers\EvaluacionController;


use App\Http\Controllers\EstudianteController;
use App\Http\Controllers\EvaluadorController;
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

Route::controller(EvaluadorController::class)->group(function () {
    Route::get('/evaluador', 'index');
    Route::get('/evaluador/{id}', 'show');
    Route::post('/evaluador', 'create');  
    Route::put('/evaluador/{id}', 'update');
    Route::delete('/evaluador/{id}', 'destroy');
});

Route::controller(EvaluacionController::class)->group(function () {
    Route::get('/evaluacion', 'index');
    Route::get('/evaluacion/{id}', 'show');
    Route::post('/evaluacion', 'store');
    Route::put('/evaluacion/{id}', 'edit');
    Route::delete('/evaluacion/{id}', 'destroy');
   
});

Route::controller(EstudianteController::class)->group(function () {
    Route::get('/estudiantes', 'index');
    Route::get('/estudiante/{id}', 'show');
    Route::post('/estudiante', 'create');  
    Route::put('/estudiante/{id}', 'update');
    Route::delete('/estudiante/{id}', 'destroy');

});

