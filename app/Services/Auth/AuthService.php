<?php

namespace App\Services\Auth;

use App\Services\BaseService; 
use App\Models\User;

class AuthService extends BaseService
{
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     */
    public static function respondWithToken($token)
    {
        return[
                'token'      => $token,
                'type'       => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60
              ];
    }

    public static function createUser($request)
    {
        return User::create(
            [
                "name"      => $request->name,
                "email"     => strtolower($request->email), 
                "password"  => bcrypt($request->password), 
            ]
        );
    }

    /**
     * Set cookie details and return cookie
     *
     * @param string $jwt JWT
     *
     * @return \Illuminate\Cookie\CookieJar|\Symfony\Component\HttpFoundation\Cookie
     */
    public static function setCookie($jwt)
    {
        return cookie(
            '_jwt',
            $jwt['token'], 
            $jwt['expires_in'] + 30,
            null,
            null,
            env('APP_DEBUG') ? false : true,
            true,
            false,
            'Strict'
        );
    }
}