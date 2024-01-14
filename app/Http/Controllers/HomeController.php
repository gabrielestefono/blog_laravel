<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $posts = Post::with(['user:id,name'])->latest()->limit(12)->get();
        return Inertia::render('Inicio',[
            'posts'=> $posts
        ]);
    }
}
