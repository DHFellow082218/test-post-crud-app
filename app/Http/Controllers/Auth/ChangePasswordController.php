<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Auth\ChangePasswordRequest; 
use Illuminate\Support\Facades\Hash; 

class ChangePasswordController extends ApiController
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function __invoke(ChangePasswordRequest $request)
    {
        if(!Hash::check($request->current_password, auth()->user()->password))
        {
            return $this->respondWithErrorMessage("Current Password does not match"); 
        }

        auth()->user()->update(
            [
                "password" => bcrypt($request->password), 
            ]
        ); 

        return $this->respondWithMessage("Password Successfully Changed"); 
    }
}
