<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SobreController extends Controller
{
    public function index(){
        $posts = Post::with(['user:id,name,imagem_pequena,imagem_grande'])->latest()->limit(12)->get();
        $users = User::select('id', 'name', /* sobre, profissão, facebook, instagram, twitter, youtube*/)->get();

        return Inertia::render('Sobre',[
            'posts'=> $posts,
            'users' => $users
        ]);
    }
}
