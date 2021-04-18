<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post; 
use App\Repositories\PostRepositoryInterface; 

use App\Http\Requests\CreatePostRequest; 
use App\Http\Requests\UpdatePostRequest; 

class PostController extends Controller
{

    private $repository; 

    public function __construct(PostRepositoryInterface $repository) 
    {
        $this->repository      =       $repository; 
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->repository->getAll(); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePostRequest $request)
    {

        Post::create(
            [
                "title"     =>      $request->title, 
                "content"   =>      $request->content,
            ]
        );

        
        return "Post Created";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->repository->get($id); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, $id)
    {
        Post::find($id)->update(
            [
                "title"         =>      $request->title,
                "content"       =>       $request->content,
            ]
        );

        return "Post Updated";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(!Post::destroy($id))
            return "Something went wrong"; 

        return "Post Deleted";
    }
}