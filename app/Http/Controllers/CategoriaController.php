<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'categoria' => 'required'
        ]);

        $posts = Post::with(['user:id,name,imagem_pequena,imagem_grande'])
        ->where('categoria', 'like', '%' . $request->categoria . '%')
        ->get();
        return Inertia::render('Busca', [
            'posts' => $posts
        ]);
    }
}
