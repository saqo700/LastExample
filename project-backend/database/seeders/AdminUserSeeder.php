<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'is_active' => 0,
            'name' => 'admin',
            'lastname' => 'Social',
            'email' => 'admin@email.com',
            'email_verified_at' => Carbon::now(),
            'password' => 'Admin01Z*17',
            'user_role' => 'admin_user',
        ]);
    }
}
