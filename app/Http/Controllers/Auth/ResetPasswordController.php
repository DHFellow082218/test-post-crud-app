<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Api\ApiCodes;
use App\Http\Requests\Auth\ResetPasswordRequest; 
use App\Models\User; 

use Illuminate\Support\Facades\Password; 
use Illuminate\Auth\Events\PasswordReset;

class ResetPasswordController extends ApiController
{
    public function construct()
    {
        $this->middleware('guest');
    }

    public function __invoke(ResetPasswordRequest $request)
    {
        if($this->attemptReset($request->only('email', 'password', 'password_confirmation', 'token')) !== Password::PASSWORD_RESET)
        {
            return $this->respondWithErrorMessage("Password was NOT reset");
        }
        
        return $this->respondWithMessage("Password has been successfully reset");
    }
    

    private function attemptReset($credentials)
    {
        return  Password::reset(
                    $credentials,
                    function ($user, $password) 
                    {
                        $user->forceFill(
                            [
                                'password' => bcrypt($password)
                            ]
                        );
            
                        $user->save();
            
                        event(new PasswordReset($user));
                    }
                );
    }

}
