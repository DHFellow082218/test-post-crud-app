<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Services\Auth\AuthService;

class RefreshController extends ApiController
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function __invoke()
    {
        return AuthService::respondWithToken(auth()->refresh());
    }
}
