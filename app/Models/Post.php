<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Scopes\OrderBy;  

class Post extends Model
{
    use HasFactory;
    
    protected $table            =       "posts";
    protected $fillable         =       ['slug', 'title', 'content'];
    
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected function orderBy()
    {
        static::addGlobalScope(new Orderby('created_at', 'asc')); 
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

}
