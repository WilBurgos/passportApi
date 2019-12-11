<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Client;

class ClientController extends Controller
{
    public function index(){
        $clients = Client::where('user_id', Auth::user()->id)->get();
        return view('passport.client', compact('clients'));
    }
}
