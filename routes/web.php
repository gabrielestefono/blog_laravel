<?php

use App\Http\Controllers\AutorController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\SobreController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class,'index'])->name('home');
Route::get('/blog', [BlogController::class,'index'])->name('blog');
Route::get('/post', [PostController::class,'index'])->name('post');
Route::get('/sobre', [SobreController::class,'index'])->name('sobre');
Route::get('/autor', [AutorController::class,'index'])->name('autor');
