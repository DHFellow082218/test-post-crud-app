<?php

namespace App\Actions\Logs;

use Lorisleiva\Actions\Concerns\AsAction;
use Illuminate\Support\Str; 

class LogActivity
{
    use AsAction;

    public function handle($name, $event, $model, $log)
    {
        activity(Str::upper($name))
        ->on($model)
        ->event(Str::upper($event))
        ->log(Str::upper($log)); 
    }
}
