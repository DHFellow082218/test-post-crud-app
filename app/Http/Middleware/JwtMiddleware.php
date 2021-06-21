<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;

use Closure;
use Exception;
use JWTAuth;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try
        {
            $user = JWTAuth::parseToken()->authenticate();
        }
        catch (Exception $e)
        {
            if($e instanceof \Tymon\JWTAuth\Exceptions\TokenBlacklistedException)
            {
                return response()->json(['status' => 'Token is Blacklisted'], 400);
            }

            if($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException)
            {
                return response()->json(['status' => 'Token is Expired'], 401);
            }

            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException)
            {
                return response()->json(['status' => 'Token is Invalid'], 403);
            }

            return response()->json(['status' => 'Authorization Token not found'], 404);
         }

        return $next($request);
    }
}
