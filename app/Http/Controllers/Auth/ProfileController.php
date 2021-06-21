<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Services\Auth\AuthService;

class ProfileController extends ApiController
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function __invoke()
    {
        return $this->respond(auth()->user(), "Current User Information");
    }
}
