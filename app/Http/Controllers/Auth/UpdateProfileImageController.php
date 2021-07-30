<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Auth\UpdateProfileImageRequest; 
use App\Traits\FileHandleTrait; 

class UpdateProfileImageController extends ApiController
{

    use FileHandleTrait; 

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
        $directory  =   "public/profile_image/"; 

        $file       =   $request->file('profile_image'); 

        $fileName   =   "profile-image-" . time() . '.' . $file->getClientOriginalExtension();  
        $filePath   =   $this->uploadFileAs($file, $fileName, $directory); 
        $name       =   $this->getFileName($filePath);

        if(auth()->user()->profile_image) 
        {
            $this->deleteFile($directory . auth()->user()->profile_image); 
        }

        auth()->user()->update(
            [
                "profile_image"  => $name, 
            ]
        );

        return $this->respondWithMessage("Profile Image Updated Successfully");
    }
}
