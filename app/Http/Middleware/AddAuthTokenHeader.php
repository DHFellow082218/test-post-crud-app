<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class AddAuthTokenHeader
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
        if (!$request->bearerToken()) 
        {   
            if ($request->hasCookie('_jwt')) 
            {
                $token = $request->cookie('_jwt');
    
                $request->headers->add(
                    [
                        'Authorization' => 'Bearer ' . $token
                    ]
                );
            }
        }

      
    
        return $next($request);
    }
}
