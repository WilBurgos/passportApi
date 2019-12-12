<?php

use Illuminate\Http\Request;
use App\Post;
use App\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Traits\HasRoles;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('api-login', 'Api/LoginController@login')->name('api.login');

Route::get('posts', function(){
    // return Post::all();
    // return Role::all();
    $usuarioLog = Auth()->user();
    $RolUser = $usuarioLog->getRoleNames();
    $permisosRol = $usuarioLog->getAllPermissions();
    return $permisosRol;
})->middleware('auth:api');
