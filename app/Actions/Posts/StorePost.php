<?php

namespace App\Actions\Posts;

use Lorisleiva\Actions\Concerns\AsAction;

use Illuminate\Http\Request; 

use App\Models\Post; 

class StorePost
{
    use AsAction;

    public function handle($request)
    {
        $post               =       Post::create(
            [
                "title"     =>      $request->title,
                "content"   =>      $request->content,
                "slug"      =>      strtolower(str_replace(' ', '-', $request->title)),
            ]
        );

        return $post;
    }
}
