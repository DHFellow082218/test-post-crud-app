<?php

namespace App\Http\Requests\Post;

use App\Http\Requests\ResponseRequest; 

class CreatePostRequest extends ResponseRequest 
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "title"         =>      ['required', 'unique:posts,title'], 
            "content"       =>      ['required'],
        ];
    }

    public function bodyParameters()
    {
        return [
            'title' => [
                'description' => 'The title of the post.',
                'example' => 'My First Post',
            ],
            'content' => [
                'description' => 'Contents of the post',
                'example'     => 'Unlimited Blade Works'
            ],
        ];
    }
}
