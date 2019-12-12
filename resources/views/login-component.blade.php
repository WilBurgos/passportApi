@extends('layouts.app')

@section('content')
<div id="app">
    <login-component postlogin="{{ route('login') }}"></login-component>
</div>
@endsection