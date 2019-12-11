<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_super_admin = Role::find(1);
        $role_min_admin = Role::find(2);

        $user = new User();
        $user->name     = 'WILBERT BURGOS MORALES';
        // $user->phone    = 2283756769;
        $user->email    = 'wburgos@fiscaliaveracruz.gob.mx';
        // $user->idAds    = 1;
        $user->password = bcrypt('123456789');
        $user->save();
        $user->roles()->attach($role_super_admin);

        $user = new User();
        $user->name     = 'YAIR ISIDRO GOMEZ LANDA';
        // $user->phone    = 2283756769;
        $user->email    = 'wil9517@hotmail.com';
        // $user->idAds    = 1;
        $user->password = bcrypt('123456789');
        $user->save();
        $user->roles()->attach($role_min_admin);
    }
}
