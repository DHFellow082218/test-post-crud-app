<?php

namespace App\Traits;

use Storage; 

Trait FileHandleTrait
{
    public function uploadFile($file, $directory)
    {
        return $file->store($directory);
    }

    public function uploadFileAs($file, $fileName, $directory) 
    {
        return $file->storeAs($directory, $fileName); 
    }

    public function deleteFile($file)
    {
        Storage::delete($file);
    }
    
    public function getFileName($filePath) 
    {
        $name = explode("/", $filePath);

        return $name[sizeof($name) - 1];  
    }

    protected function fileExists() 
    {
        //...
    }
}