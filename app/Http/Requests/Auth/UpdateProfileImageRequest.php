<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\ResponseRequest;

class UpdateProfileImageRequest extends ResponseRequest
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
            "profile_image"     =>      ['required', 'image', 'mimes:jpeg,jpg,png']
        ];
    }
}
