<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request){
        dd($request->all());
    }
}
