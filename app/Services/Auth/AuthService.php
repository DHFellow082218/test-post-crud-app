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
                "email"     => $request->email, 
                "password"  => bcrypt($request->password), 
            ]
        );
    }
}