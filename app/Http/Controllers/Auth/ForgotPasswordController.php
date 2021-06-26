<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Api\ApiCodes;
use App\Http\Requests\Auth\ForgotPasswordRequest; 
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password; 

class ForgotPasswordController extends ApiController
{
    public function construct()
    {
        $this->middleware('guest');
    }

    public function __invoke(ForgotPasswordRequest $request)
    {
        try
        {
            $user = User::select('email')->where("email", "=", $request->email)->firstorFail(); 
        }
        catch(\Exception $e)
        {
            return $this->respondWithErrorMessage("Email not Found"); 
        }

        if($this->sendResetPasswordEmail($request->only('email')) !== Password::RESET_LINK_SENT)
        {
            return $this->respondWithErrorMessage("Unable to send Reset Link Email");
        }
        
        return $this->respondWithMessage("Reset Password Email Sent, please check your email");  
    }

    private function sendResetPasswordEmail($email)
    {
        return  Password::sendResetLink(
                    $email
                );
    }
}
