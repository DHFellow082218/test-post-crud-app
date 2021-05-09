<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Repositories\PostRepositoryInterface;

use App\Actions\Posts\StorePost;
use App\Http\Requests\CreatePostRequest;
use App\Http\Requests\UpdatePostRequest;

/**
 * @group Posts Endpoints
 *
 * APIs for managing Auth
 */

class PostController extends Controller
{

    private $repository;

    public function __construct(PostRepositoryInterface $repository)
    {
        $this->repository      =       $repository;
    }


    /**
    * Displays All Posts.
    *
    * @responseFile storage/responses/posts/posts.get.json
    * 
    * @queryParam sort string Field to sort by. Defaults to 'id'.
    * @queryParam fields required Comma-separated list of fields to include in the response. Example: title,published_at,is_public
    * @queryParam filters[published_at] Filter by date published.
    * @queryParam filters[is_public] integer Filter by whether a post is public or not. Example: 1
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return $this->repository->all();
    }

    /**
     * Store a newly created posts in storage.
     * 
     * @response status=422 scenario="Validation Error" [
     *       message     =>  'given data is invalid', 
     *       {
     *          title    =>  'title is required', 
     *          content  =>  'content is required, 
     *       },
     * ]
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePostRequest $request)
    {
   
        $post = StorePost::run($request); 
        
        return response()->json(
            [
                "message"       =>      "post created!",
                "result"        =>      $post,
            ]
        );
    }

    /**
     * This endpoint allows you to add a word to the list. It's a really useful endpoint,
     * and you should play around with it for a bit.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try
        {
            return $this->repository->findById($id);
        }
        catch(\Exception $e)
        {
            return response()->json(["message" => $e->getMessage()]);
        }
    }

    /**
     * Update the specified resource in storage.
     * 
     * @urlParam id integer required The ID of the post
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, $id)
    {
        return $this->repository->update($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->repository->delete($id);

        return response()->json(
            [
                "message"       =>      "Post Deleted!",
            ]
        );
    }
}
