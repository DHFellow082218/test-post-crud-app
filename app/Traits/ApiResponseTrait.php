<?php
//* Credit : https://github.com/csinghdev/laravel-starter/blob/master/app/Http/Controllers/Controller.php

namespace App\Traits;

use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
use Symfony\Component\HttpFoundation\Response as HttpResponse;

use App\Http\Api\ApiCodes; 
use App\Http\Api\SuccessMessages; 

Trait ApiResponseTrait
{
    //* SUCCESS MESSAGES
    public function respond($data, $msg = null) 
    {
        return ResponseBuilder::asSuccess()->withData($data)->withMessage($msg)->build();
    }
    
    public function respondRetrieved($data = null, $msg = SuccessMessages::RESOURCE_RETRIEVED)
    {
        return $this->respond($data, $msg);
    }

    public function respondCreated($data = null, $msg = SuccessMessages::RESOURCE_CREATED)
    {
        return $this->respond($data, $msg);
    }

    public function respondUpdated($data = null, $msg = SuccessMessages::RESOURCE_UPDATED)
    {
        return $this->respond($data, $msg);
    }
    
    public function respondDestroyed($data = null, $msg = SuccessMessages::RESOURCE_DESTROYED)
    {
        return $this->respond($data, $msg);
    }
     
    public function respondRestored($data = null, $msg = SuccessMessages::RESOURCE_RESTORED)
    {
        return $this->respond($data, $msg);
    }
    
    public function respondDeleted($data = null, $msg = SuccessMessages::RESOURCE_DELETED)
    {
        return $this->respond($data, $msg);
    }

    public function respondWithMessage($msg) 
    {
        return ResponseBuilder::asSuccess()->withMessage($msg)->build();
    }
    
    //* ERROR MESSAGES
    protected function respondWithError($api_code, $http_code) 
    {
        return ResponseBuilder::asError($api_code)->withHttpCode($http_code)->build();
    }

    public function respondWithErrorMessage($msg) 
    {
        return ResponseBuilder::asError(ApiCodes::SOMETHING_WENT_WRONG)->withMessage($msg)->build();
    }

    public function respondServerError()
    {
        return $this->respondWithError(ApiCodes::SERVER_ERROR, HttpResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function respondBadRequest() 
    {
        return $this->respondWithError(ApiCodes::HTTP_EXCEPTION, HttpResponse::HTTP_BAD_REQUEST);
    }

    public function respondUnAuthorizedRequest() 
    {
        return $this->respondWithError(ApiCodes::AUTHENTICATION_EXCEPTION, HttpResponse::HTTP_FORBIDDEN);
    }

    public function respondInvalidCredentials() 
    {
        return $this->respondWithError(ApiCodes::INVALID_CREDENTIALS, HttpResponse::HTTP_UNPROCESSABLE_ENTITY);
    }
    
    public function respondNotFound() 
    {
        return $this->respondWithError(ApiCodes::MODEL_NOT_FOUND, HttpResponse::HTTP_NOT_FOUND);
    }

    public function respondWithExceptionError($api_code, $msg) 
    {
        return ResponseBuilder::asError($api_code)->withMessage($msg)->build();
    }
}