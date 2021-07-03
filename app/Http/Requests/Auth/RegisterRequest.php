<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\ResponseRequest;

class RegisterRequest extends ResponseRequest
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
            'name'     => ['required', 'string', 'between:2,100', 'unique:users,name'],
            'email'    => ['required', 'string', 'email', 'max:100', 'unique:users'],
            'password' => ['required', 'string', 'confirmed', 'min:6'],
        ];
    }
}
