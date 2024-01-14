<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $posts = Post::with(['user:id,name,imagem_pequena'])->latest()->limit(12)->get();
        return Inertia::render('Inicio',[
            'posts'=> $posts
        ]);
    }

    public function categorias(){
        $categorias = Categoria::all();
        return response()->json($categorias);
    }
}
