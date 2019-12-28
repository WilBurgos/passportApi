<template>
    <div class="auth-layout-wrap" :style="{ backgroundImage: 'url(' + imgbackground + ')' }"> <!-- {{asset('assets/images/vera10.jpg')}} -->
        <div class="auth-content">
            <div class="card o-hidden">
                <div class="row">
                    <div class="col-md-7">
                        <div class="p-4">
                            <div class="auth-logo text-center mb-4">
                                <img :src="imgform" alt="10"> <!-- {{asset('Personal/img/FGE_Favion-300x300.png')}} -->
                            </div>
                            <h1 class="mb-3 text-18">Iniciar Sesión</h1>
                            <!-- @if (session('error'))
                                <div class="alert alert-danger">
                                    {{ session('error') }}
                                </div>
                            @endif -->
                            <form><!-- method="POST" :action="postlogin" {{ route('login') }} -->
                                <div class="form-group">
                                    <label for="login">Correo | Usuario:</label>
                                    <input id="login" type="text" class="form-control form-control-rounded" name="login" autocomplete="email" required>
                                </div>
                                <div class="form-group">
                                    <label for="password">Contraseña:</label>
                                    <input id="password" type="password" class="form-control form-control-rounded" name="password" required autocomplete="current-password">
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-rounded btn-primary btn-block mt-2" v-on:click="login">Acceder</button><!--v-on:click="login"-->
                                </div>
                            </form>

                            <div class="mt-3 text-center">
                                <a href="" class="text-muted"><u>¿Olvidó la contraseña?</u></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 text-center" :style="{ backgroundSize:'cover', backgroundImage: 'url(' + imgoptions + ')' }"><!--{{asset('Personal/img/logo_izq.jpg') }} -->
                        <!-- <div class="pr-3 auth-right">
                            <a onclick="window.open('http://correo.fiscaliaveracruz.gob.mx')" class="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text">
                                <i class="i-Mail-with-At-Sign"></i> Abrir correo institucional
                            </a>
                            <a onclick="window.open('https://mail.google.com/')" class="btn btn-rounded btn-outline-primary btn-outline-google btn-block btn-icon-text">
                                <i class="i-Google-Plus"></i>Correo Google
                            </a>
                            
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        props:{
            postlogin:'',
            imgbackground:'',
            imgform:'',
            imgoptions:''
        },
        methods:{
            login: function(event){
                event.preventDefault()
                var url = this.postlogin;
                axios.post(url,{
                    'email':$('#login').val(),
                    'password':$('#password').val(),
                }).then(function (response) {
                    // console.log(response)
                    window.location = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });  
            }
        }
    }
</script>