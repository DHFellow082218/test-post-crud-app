<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator ;
use Illuminate\Contracts\Validation\ValidationException; 
use App\Http\Requests\APIRequest; 
use App\Models\Post; 

class CreatePostRequest extends APIRequest 
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
