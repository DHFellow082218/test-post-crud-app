<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\APIRequest; 
use App\Models\Post; 

/**
 * @queryParam title   required, title of the post 
 * @queryParam content required, content of the post 
 */
class UpdatePostRequest extends FormRequest
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
            "title"         =>      ['required', 'unique:posts,title,' . $this->id], 
            "content"       =>      ['required'],
        ];
    }
}
