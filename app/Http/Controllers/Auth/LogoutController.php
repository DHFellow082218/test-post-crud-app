<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Services\Auth\AuthService;

class LogoutController extends ApiController
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function __invoke()
    {
        auth()->logout();

        return $this->respondWithMessage('User Successfully Logged Out'); 
    }
   
}
