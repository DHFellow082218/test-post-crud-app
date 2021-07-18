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

        $cookie = AuthService::setCookie(AuthService::respondWithToken($token));

        return response()->json([
            'token' => $token,
            'user'  => auth()->user() 
            //'user' => auth()->user(),
        ])->withCookie($cookie);
    }
    
}
