<?php 

namespace App\Http\Api;

class ApiCodes
{
    public const HTTP_EXCEPTION           = "300";
    public const HTTP_SERVICE_UNAVAILABLE = "301";
    public const UNCAUGHT_EXCEPTION       = "302";
    public const AUTHENTICATION_EXCEPTION = "303";
    public const HTTP_NOT_FOUND           = "304";
    public const VALIDATION_EXCEPTION     = "305";
    public const MODEL_NOT_FOUND          = "306";
    public const METHOD_NOT_ALLOWED       = "307";
    public const INVALID_CREDENTIALS      = "308";
    public const SERVER_ERROR             = "500"; 

    public const SOMETHING_WENT_WRONG     = "309"; 
}