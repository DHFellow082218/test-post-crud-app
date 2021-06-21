<?php

namespace App\Http\Resources\Post;

use Illuminate\Http\Resources\Json\JsonResource;

class PostCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'slug'      => $this->slug, 
            'title'     => $this->title,
            'content'   => $this->content, 
            'created_at'=> $this->created_at, 
            'updated_at'=> $this->updated_at, 
        ];
    }
}
