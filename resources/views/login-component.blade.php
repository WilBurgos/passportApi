<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Login | Fiscalia General del Estado</title>
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('Personal/img/FGE_Favion-300x300.png') }}">
    <link rel="icon" sizes="32x32" href="{{ asset('Personal/img/FGE_Favion-300x300.png') }}">
    <!-- <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900" rel="stylesheet"> -->
    <link rel="stylesheet" href="{{asset('assets/styles/css/themes/lite-purple.min.css')}}">
    <link rel="stylesheet" href="{{ asset('Personal/css/estilosDU.css') }}">
    <style>
        a:not([href]):not([tabindex]):hover {
            color: white!important;
        }
    </style>
</head>

<body>

    <div id="app">
        <login-component 
            postlogin="{{ route('login') }}"
            imgbackground="{{asset('assets/images/vera10.jpg')}}"
            imgform="{{asset('Personal/img/FGE_Favion-300x300.png')}}"
            imgoptions="{{asset('Personal/img/logo_izq.jpg') }}"
        >
        </login-component>
    </div>

    <footer class="fixed-bottom d-none d-lg-block d-xl-block">
            <div clas="navbar navbar-expand-lg border-top">
                <small class="text-muted">
                    <strong><em style="color:#ffff">
                    2019© Fiscalía General del Estado de Veracruz, DCIIT.
                    </em></strong>
                </small>
            </div>
    </footer>

    <script src="{{ asset('js/app.js') }}" defer></script>

    <script src="{{asset('assets/js/common-bundle-script.js')}}"></script>
    <script src="{{asset('assets/js/script.js')}}"></script>
</body>
</html>