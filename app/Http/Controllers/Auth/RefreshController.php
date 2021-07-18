<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Services\Auth\AuthService;
use JWTAuth;

class RefreshController extends ApiController
{
    public function __construct()
    {
        //$this->middleware('jwt.verify');
    }

    public function __invoke()
    {
        try
        {
            $user = JWTAuth::parseToken()->authenticate();
        }
        catch (\Exception $e)
        {
            if($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException)
            {
                $cookie = AuthService::setCookie(AuthService::respondWithToken(auth()->refresh()));
                return response()->json(['message' => "Token Refreshed"])->withCookie($cookie);
            }

            if($e instanceof \Tymon\JWTAuth\Exceptions\TokenBlacklistedException)
            {
                return response()->json(['status' => 'Token is Blacklisted'], 400);
            }


            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException)
            {
                return response()->json(['status' => 'Token is Invalid'], 403);
            }

            return response()->json(['status' => 'Authorization Token not found'], 404);
        }
    }
}
