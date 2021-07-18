<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Services\Auth\AuthService;
use Illuminate\Support\Facades\Cookie;

class LogoutController extends ApiController
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function __invoke()
    {
        auth()->logout();

        Cookie::queue(Cookie::forget('_jwt'));

        return $this->respondWithMessage('User Successfully Logged Out'); 
    }
   
}
