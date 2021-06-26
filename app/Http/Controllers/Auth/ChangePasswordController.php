<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Api\ApiCodes;
use App\Http\Requests\Auth\ChangePasswordRequest; 
use App\Models\User; 

class ChangePasswordController extends ApiController
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function __invoke(ChangePasswordRequest $request)
    {
        auth()->user()->update(
            [
                "password" => bcrypt($request->password), 
            ]
        ); 

        return $this->respondWithMessage("Password Successfully Changed"); 
    }
}
