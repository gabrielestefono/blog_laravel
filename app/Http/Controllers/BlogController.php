<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index(){
        $posts = Post::with(['user:id,name,imagem_pequena,imagem_grande'])->latest()->limit(12)->get();
        return Inertia::render('Blog',[
            'posts'=> $posts
        ]);
    }
}
