<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\ResponseRequest;

class ChangePasswordRequest extends ResponseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "current_password"  =>  ["required"], 
            "password"          =>  ["required", "min:8", "confirmed"]
        ];
    }
}
