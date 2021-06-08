<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class OrderBy implements Scope
{
    protected $column; 
    protected $model; 

    public function construct($column, $direction = 'asc')
    {
        $this->column       =   $column; 
        $this->direction    =   $direction; 
    }

    public function apply(Builder $builder, Model $model)
    {
        $builder->orderBy($this->column, $this->direction);
    }
}