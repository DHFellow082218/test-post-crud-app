<?php namespace App\Repositories;

use App\Models\Post;

class PostRepository implements PostRepositoryInterface
{
	public function all()
    {
		return Post::all();
	}

	public function findById($id)
    {
		return Post::findOrFail($id);
	}

    public function findBySlug($slug)
    {
        return Post::where('slug', '=', $slug);
    }

    public function update($id)
    {
        $post       =       Post::findOrFail($id);

        $post->update(
            [
                "title"         =>       request('title'),
                "content"       =>       request('content'),
            ]
        );

        return response()->json(
            [
                'message'       =>      'post updated!',
                'data'          =>      $post
            ]
        );
    }

    public function delete($id)
    {
        Post::findorFail($id)->delete();
    }
}
