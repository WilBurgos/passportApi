<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Permission::create(['name' => 'ver todo']);
        Permission::create(['name' => 'ver pagina-dos']);
        Permission::create(['name' => 'ver pagina-tres']);

        $roleSuperAdmin = Role::create(['name' => 'super-admin']);
        $roleMiniAdmin = Role::create(['name' => 'mini-admin']);

        $roleMiniAdmin->givePermissionTo('ver pagina-dos');
        $roleSuperAdmin->givePermissionTo(Permission::all());
    }
}
