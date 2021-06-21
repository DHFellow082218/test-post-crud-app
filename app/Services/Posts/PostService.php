<?php

namespace App\Services\Posts;

use Spatie\Activitylog\Contracts\Activity;
use App\Models\Post;

class PostService
{   
    public function logActivity($log)
    {
        activity()->performedOn(); 
    }
}