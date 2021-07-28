<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Auth\UpdateProfileImageRequest; 

class UpdateProfileImageController extends ApiController
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
    public function __invoke(UpdateProfileImageRequest $request)
    {
        return $this->respondWithMessage("Profile Image Updated Successfully");
    }
}
