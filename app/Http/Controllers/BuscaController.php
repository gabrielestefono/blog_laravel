<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BuscaController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'titulo' => 'required'
        ]);

        $posts = Post::with(['user:id,name,imagem_pequena,imagem_grande'])
        ->where('titulo', 'like', '%' . $request->titulo . '%')
        ->get();
        return Inertia::render('Busca', [
            'posts' => $posts
        ]);
    }
}
