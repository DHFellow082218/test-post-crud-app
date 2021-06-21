<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Auth\LoginRequest; 
use App\Services\Auth\AuthService;

class LoginController extends ApiController
{
    public function __construct()
    {
        //$this->middleware('jwt.verify');
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    
    public function __invoke(LoginRequest $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) 
        {
            return $this->respondInvalidCredentials();
        }        

        return $this->respond(
            AuthService::respondWithToken($token),
            "Login Successfull"
        );
    }
    

}