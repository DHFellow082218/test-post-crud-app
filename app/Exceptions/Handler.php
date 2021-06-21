<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use MarcinOrlowski\ResponseBuilder\ExceptionHandlerHelper;
use App\Http\Api\ApiCodes; 
use App\Traits\ApiResponseTrait;
use ErrorException;
use Throwable;

class Handler extends ExceptionHandler
{

    use ApiResponseTrait; 
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function render($request, Throwable $e)
    {                
        if($e instanceof ModelNotFoundException)
        {
            return $this->respondWithExceptionError(ApiCodes::MODEL_NOT_FOUND ,$e->getMessage()); 
        }

        if($e instanceof ErrorException)
        {
            return $this->respondWithExceptionError(ApiCodes::UNCAUGHT_EXCEPTION ,$e->getMessage()); 
        }

        if($e instanceof MethodNotAllowedHttpException)
        {
            return $this->respondWithExceptionError(ApiCodes::METHOD_NOT_ALLOWED ,$e->getMessage()); 
        }

        if($e instanceof NotFoundHttpException)
        {
            return $this->respondWithExceptionError(ApiCodes::HTTP_NOT_FOUND ,$e->getMessage()); 
        }

        if($e instanceof AuthorizationException)
        {
            return $this->respondWithExceptionError(ApiCodes::AUTHENTICATION_EXCEPTION ,$e->getMessage()); 
        }

        return ExceptionHandlerHelper::render($request, $e);
    }

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
}
