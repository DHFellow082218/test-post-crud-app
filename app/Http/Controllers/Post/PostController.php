<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\ApiController;
use App\Models\Post;
use App\Actions\Posts\StorePost;
use App\Actions\Logs\LogActivity; 
use App\Http\Requests\Post\CreatePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Http\Resources\Post\PostCollection;

use Illuminate\Support\Str; 

/*
 * @group Posts Endpoints
 *
 * APIs for managing Auth
 */
class PostController extends ApiController
{
    public function __construct()
    {
        $this->middleware('jwt.verify')->except(['show']);
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
        $data = PostCollection::collection(Post::all());         

        return $this->respondRetrieved($data); 
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
        $data = StorePost::run($request); 
        
        //LogActivity::run('posts', 'created', $data ,'post created'); 
        
        /*    activity(Str::upper('posts'))
            ->on($data)
            ->event('created')
            ->log(Str::upper('post created'));  */

        return $this->respondCreated($data);
    }

    /**
     * This endpoint allows you to add a word to the list. It's a really useful endpoint,
     * and you should play around with it for a bit.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        try 
        {
            $data = Post::where('slug', '=', $slug)->firstOrFail();         
        }
        catch(\Exception $e)
        {
            return $this->respondNotFound();
        }
        
        return $this->respondRetrieved($data); 
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
        $data = null; 

        return $this->respondUpdated($data); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        return $this->respondDestroyed(); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($slug)
    {
        return $this->respondRestored(); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($slug)
    {
        return $this->respondDeleted(); 
    }
}
