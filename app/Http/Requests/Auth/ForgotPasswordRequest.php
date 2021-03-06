<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\ResponseRequest;

class ForgotPasswordRequest extends ResponseRequest
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
            "email" => ["required", "email", "exists:users,email"]
        ];
    }

    public function messages()
    {
        return [
            'email.exists' => 'Email Provided does not exist in our system',
        ];
    }
}
