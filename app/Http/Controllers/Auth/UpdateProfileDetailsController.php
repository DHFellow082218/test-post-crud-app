<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Auth\UpdateProfileDetailsRequest; 
use App\Services\Auth\AuthService; 

class UpdateProfileDetailsController extends ApiController
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdateProfileDetailsRequest $request)
    {
        AuthService::updateUser(auth()->user()->id, $request); 

        return $this->respondWithMessage("Profile Details Updated Successfully");
    }
}
