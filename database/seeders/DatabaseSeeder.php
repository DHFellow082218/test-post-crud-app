<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //! If php artisan config:cache was ran
        //! Run php artisan config:clear to load env varibles
        if(env('APP_DEBUG'))
        {
            $this->call([
                PostsSeeder::class,
            ]);
        }
    }
}
