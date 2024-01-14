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
            'nome' => 'required'
        ]);

        $posts = Post::with(['user:id,name,imagem_pequena,imagem_grande', 'categoria'])
            ->whereHas('categoria', function ($query) use ($request) {
                $query->where('slug', $request->nome);
            })
            ->get();
        return Inertia::render('Categoria', [
            'posts' => $posts
        ]);
    }
}
