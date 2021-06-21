<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Auth\RegisterRequest; 
use App\Services\Auth\AuthService;

class RegisterController extends ApiController
{
    public function __construct()
    {
        //$this->middleware('jwt.verify');
    }

    public function __invoke(RegisterRequest $request) 
    {
        AuthService::createUser($request);

        return $this->respondWithMessage('User Successfully Registered'); 
    }
}
