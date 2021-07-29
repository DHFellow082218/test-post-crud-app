<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Auth\UpdateProfileImageRequest; 
use Storage; 

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
        // TODO : Organize to individual functions 
        $path = $request->file('profile_image')->store('public/profile_image');
        $name = explode("/", $path);
        $index = sizeof($name) - 1;

        if(auth()->user()->profile_image) 
        {
            Storage::delete("public/profile_image/" . auth()->user()->profile_image); 
        }

        auth()->user()->update(
            [
                "profile_image"  => $name[$index], 
            ]
        );

        return $this->respondWithMessage("Profile Image Updated Successfully at {$path}");
    }
}
