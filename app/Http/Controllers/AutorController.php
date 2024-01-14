<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AutorController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            "id"=> "required|int",
        ]);

        $user = User::select(
            'id',
            'name',
            'sobre',
            'profissao',
            'facebook',
            'instagram',
            'twitter',
            'youtube',
            'imagem_grande'
            )->findOrfail($request->id);

            $posts = Post::with(['user:id,name,imagem_pequena,imagem_grande', 'categoria'])
                ->where('user_id', $request->id)->latest()->limit(12)->get();

        return Inertia::render('Autor', [
            'posts'=> $posts,
            'user'=> $user
            ]);
    }
}
