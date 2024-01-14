<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Request $request){
        $id = $request->query("id");
        $post = Post::with(['user:id,name,imagem_pequena', 'categoria'])->findOrFail($id);
        return Inertia::render("Post", [
            "post"=> $post
        ]);
    }
}
