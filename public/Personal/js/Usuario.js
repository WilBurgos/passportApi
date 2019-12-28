$(document).ready(function(){
    $('#TablaVistaUsuario').DataTable({
        "responsive": true,
        "fixedHeader": true,
        "processing": true,
        // "serverSide": true,
        "pageLength": 25,
        "searching": true,
        // buttons: ['excel'],
        'ajax': {
            "type": "GET",
            "url" :  route('tabla.usuarios'),
        },
        'columns': [
            {data:"id", className: 'hidden-xs'},
            {data:"usuario", className: 'text-center'},
            {data:"email", className: 'text-center'},
            // {data:"puesto", className: 'text-center'},
            {data:"rol", className: 'text-center'},
            {data:"acciones" , className: 'text-center'}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
        }
    });

    $('#TablaVistaUsuario').on( 'click', '.Detalle', function () {
        $(this).children('i.cargando.fa.fa-spinner.fa-spin').show()
        // $(".cargando").show();
        var id = $(this).parents("tr").find("td")[0].innerHTML;
        var _token = $('meta[name="csrf-token"]').attr('content')
        // window.location.href = route('detalle.usuario', [id]);
        window.location.href = route('editar.usuario', [id]);
    });

    ///
    $('#TablaVistaUsuario').on( 'click', '.Alta', function () {
        var id = $(this).parents("tr").find("td")[0].innerHTML;
        var _token = $('meta[name="csrf-token"]').attr('content')
        // console.log("Este es el token"+_token);
        swal({
             title: "¿Está seguro?",
             text: "Se dara de alta a este usuario.",
             type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#a08300",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            // confirmButtonColor: '#a08300',
            // title: "¿Está seguro?",
            // text: "Se dara de baja a este usuario.",
            // type: "info",
            // showCancelButton: true,
            // closeOnConfirm: false,
            showLoaderOnConfirm: true
        }).then(function () {
            $.ajax({
                type: 'POST',
                data: {
                    // '_token':_token,
                    'id': id,
                    '_token': _token

                },
                cache: false,
                url: route('alta.usuario'),
                dataType: "JSON",
                success : function(response) {
                    if(response.status == 1){

                        setTimeout(function () {

                          }, $('#TablaVistaUsuario').DataTable().ajax.reload());

                    }else{
                        swal({
                            title: "Error",
                            text: "intente de nuevo.",
                            type: "error",
                           showCancelButton: true,
                           confirmButtonColor: "#a08300",
                           confirmButtonClass: "btn-danger",
                           confirmButtonText: "Aceptar",

                       })
                    }

                }
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                           swal({
                    title: "Cancelado",
                    text: "El proceso se ha cancelado",
                    type: "error",
                   showCancelButton: false,
                   confirmButtonColor: "#a08300",
                   confirmButtonClass: "btn-danger",
                   confirmButtonText: "Aceptar",

               })
            }
        })
    });

    ////


    $('#TablaVistaUsuario').on( 'click', '.Baja', function () {
        var id = $(this).parents("tr").find("td")[0].innerHTML;
        var _token = $('meta[name="csrf-token"]').attr('content')
        // console.log("Este es el token"+_token);
        swal({
             title: "¿Está seguro?",
             text: "Se dara de baja a este usuario.",
             type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#a08300",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            // confirmButtonColor: '#a08300',
            // title: "¿Está seguro?",
            // text: "Se dara de baja a este usuario.",
            // type: "info",
            // showCancelButton: true,
            // closeOnConfirm: false,
            showLoaderOnConfirm: true
        }).then(function () {
            $.ajax({
                type: 'POST',
                data: {
                    // '_token':_token,
                    'id': id,
                    '_token': _token

                },
                cache: false,
                url: route('baja.usuario'),
                dataType: "JSON",
                success : function(response) {
                    if(response.status == 1){

                        setTimeout(function () {

                          }, $('#TablaVistaUsuario').DataTable().ajax.reload());

                    }else{
                        swal({
                            title: "Error",
                            text: "intente de nuevo.",
                            type: "error",
                           showCancelButton: true,
                           confirmButtonColor: "#a08300",
                           confirmButtonClass: "btn-danger",
                           confirmButtonText: "Aceptar",

                       })
                    }

                }
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                           swal({
                    title: "Cancelado",
                    text: "El proceso se ha cancelado",
                    type: "error",
                   showCancelButton: false,
                   confirmButtonColor: "#a08300",
                   confirmButtonClass: "btn-danger",
                   confirmButtonText: "Aceptar",

               })
            }
        })
    });



    $('#TablaVistaUsuario').on( 'click', '.Editar', function () {
        $(".cargando2").show();
        var id = $(this).parents("tr").find("td")[0].innerHTML;
        var _token = $('meta[name="csrf-token"]').attr('content')
        window.location.href = route('editar.usuario', [id]);
    });

    $('.agregar').on( 'click', function () {
        $(".AgUsuario").show();
        window.location.href = route('agregar');
    });

    $('.detalleRegresar').on( 'click', function () {
        $(".cargando").show();
        window.location.href = route('inicio');
    });

    $('.inicio').on( 'click', function () {
        console.log("Entro");
        $(".AgInicio").show();
        window.location.href = route('index.usuarios');
    });


});
function editD(id){
    $(".Usuario").show();
    window.location.href = route('editar.usuario', [id]);
}


function EditPassw(id){
    $('#idPassword').val(id);
    texto = $('#nombreUser'+id).val();
    console.log('primero: ', id , texto);
    $('#newpassw').val(texto);

    console.log('en EditPassw: ', id, texto);
}
function cambPassw() {

    var caract_longitud = 12;
    var caract_minlongitud = 3;

    var text1 = $('#idNewpw1').val();
    console.log('En el CambPassw: ',text1);

    var texto = $('#newpassw').val();
    var id =$("#idPassword").val();
    console.log('Entrando al CambPassw: ', id, texto);

    if (texto != '' && text1 != '') {

        if (texto.length < caract_longitud && texto.length>caract_minlongitud) {

            if (texto == text1) {
                $.ajax({
                    type: "POST",
                    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                    url:route('update.passw', id),
                    data:{
                        texto:texto,
                        idPermiso:id,
                            },
                    dataType: "JSON",
                    success: function (data) {
                    console.log(data);
                    $('#ModEditPassw').modal('hide');
                    swal("¡Bien!", "Se actualizo la contraseña", "success");
                    }
                });

            } else {

                swal("¡ERROR!", "Confirmacion incorrecta, vuelva a intentarlo.....", "error");

            }

        } else {

            swal("¡ERROR!", "La Contraseña debe tener minimo 4 y maximo de 12 caracteres", "error");

        }

    } else {

        swal("¡ERROR!", "No ha ingresado la nueva contraseña", "error");
    //     swal({
    //         title: "¡¡¡ERROR!!!",
    //         text: "Ingresa un valor a tu nueva contraseña",

    //        showCancelButton: false,
    //        confirmButtonColor: "#a08300",
    //        confirmButtonClass: "btn-danger",
    //        confirmButtonText: "Aceptar",
    //    })
    }
    // console.log('Fin del CambPassw: ', id, texto);

}


$('.CambioContra').on( 'click', function () {
    var caract_longitud = 9;
    var caract_minlongitud = 3;

    var text1 = $('#idNewpw1').val();
    console.log('En el CambPassw: ',text1);

    var texto = $('#newpassw').val();
    var id =$("#idPassword").val();
    console.log('Entrando al CambPassw: ', id, texto,  text1   );

    if (texto != '' && text1 != '') {

        if (texto.length < caract_longitud && texto.length>caract_minlongitud) {

            if (texto == text1) {
                $.ajax({
                    type: "POST",
                    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                    url:route('update.passw', id),
                    data:{
                        texto:texto,
                        idPermiso:id,
                            },
                    dataType: "JSON",
                    success: function (data) {
                    console.log(data);
                    $('#ModEditPassw').modal('hide');
                    swal("¡Bien!", "Se actualizo la contraseña", "success");
                    }
                });

            } else {

                swal("¡ERROR!", "las contraseñas no son iguales .....", "error");

            }

        } else {

            swal("¡ERROR!", "La Contraseña debe tener minimo 4 y maximo de 8 carcateres", "error");

        }

    } else {

        swal("¡ERROR!", "No ha ingresado la nueva contraseña", "error");
    //     swal({
    //         title: "¡¡¡ERROR!!!",
    //         text: "Ingresa un valor a tu nueva contraseña",

    //        showCancelButton: false,
    //        confirmButtonColor: "#a08300",
    //        confirmButtonClass: "btn-danger",
    //        confirmButtonText: "Aceptar",
    //    })
    }




});


///aqui empiza configuracionn de la tabla de activos y inactivos
var id =$(".valor").val();
$('#TablastatusUsuario').DataTable({
    "responsive": true,
    "fixedHeader": true,
    "processing": true,
    // "serverSide": true,
    "pageLength": 25,
    "searching": true,
    // buttons: ['excel'],
    'ajax': {
        "type": "GET",
        "url" :  route('tabla.status', id),
    },
    'columns': [
        {data:"id", className: 'hidden-xs'},
        {data:"usuario", className: 'text-center'},
        {data:"email", className: 'text-center'},
        // {data:"puesto", className: 'text-center'},
        {data:"rol", className: 'text-center'},
        {data:"acciones" , className: 'text-center'}
    ],
    "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
    }
});



$('#TablastatusUsuario').on( 'click', '.Baja', function () {
    var id = $(this).parents("tr").find("td")[0].innerHTML;
    var _token = $('meta[name="csrf-token"]').attr('content')
    // console.log("Este es el token"+_token);
    swal({
         title: "¿Está seguro?",
         text: "Se dara de baja a este usuario.",
         type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#a08300",
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        closeOnConfirm: false,
        // confirmButtonColor: '#a08300',
        // title: "¿Está seguro?",
        // text: "Se dara de baja a este usuario.",
        // type: "info",
        // showCancelButton: true,
        // closeOnConfirm: false,
        showLoaderOnConfirm: true
    }).then(function () {
        $.ajax({
            type: 'POST',
            data: {
                // '_token':_token,
                'id': id,
                '_token': _token

            },
            cache: false,
            url: route('baja.usuario'),
            dataType: "JSON",
            success : function(response) {
                if(response.status == 1){

                    setTimeout(function () {
                        swal({
                            title: "Acción realizada con exito",
                            type: "success",
                           showCancelButton: false,
                           confirmButtonColor: "#a08300",
                           confirmButtonClass: "btn-danger",
                           confirmButtonText: "Aceptar",

                       })

                      }, $('#TablastatusUsuario').DataTable().ajax.reload());


                }else{
                    swal({
                        title: "Error",
                        text: "intente de nuevo.",
                        type: "error",
                       showCancelButton: true,
                       confirmButtonColor: "#a08300",
                       confirmButtonClass: "btn-danger",
                       confirmButtonText: "Aceptar",

                   })
                }

            }
        });
    }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
                       swal({
                title: "Cancelado",
                text: "El proceso se ha cancelado",
                type: "error",
               showCancelButton: false,
               confirmButtonColor: "#a08300",
               confirmButtonClass: "btn-danger",
               confirmButtonText: "Aceptar",

           })
        }
    })
});


$('#TablastatusUsuario').on( 'click', '.Detalle', function () {
    $(this).children('i.cargando.fa.fa-spinner.fa-spin').show()
    // $(".cargando").show();
    var id = $(this).parents("tr").find("td")[0].innerHTML;
    var _token = $('meta[name="csrf-token"]').attr('content')
    // window.location.href = route('detalle.usuario', [id]);
    window.location.href = route('editar.usuario', [id]);
});

$('#TablastatusUsuario').on( 'click', '.AltaInactivos', function () {
    var id = $(this).parents("tr").find("td")[0].innerHTML;
    var _token = $('meta[name="csrf-token"]').attr('content')
    // console.log("Este es el token"+_token);
    swal({
         title: "¿Está seguro?",
         text: "Se dara de alta a este usuario.",
         type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#a08300",
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        closeOnConfirm: false,
        // confirmButtonColor: '#a08300',
        // title: "¿Está seguro?",
        // text: "Se dara de baja a este usuario.",
        // type: "info",
        // showCancelButton: true,
        // closeOnConfirm: false,
        showLoaderOnConfirm: true
    }).then(function () {
        $.ajax({
            type: 'POST',
            data: {
                // '_token':_token,
                'id': id,
                '_token': _token

            },
            cache: false,
            url: route('alta.usuario'),
            dataType: "JSON",
            success : function(response) {
                if(response.status == 1){

                    setTimeout(function () {
                        swal({
                            title: "Acción realizada con exito",
                            type: "success",
                           showCancelButton: false,
                           confirmButtonColor: "#a08300",
                           confirmButtonClass: "btn-danger",
                           confirmButtonText: "Aceptar",

                       })

                      }, $('#TablastatusUsuario').DataTable().ajax.reload());

                }else{
                    swal({
                        title: "Error",
                        text: "intente de nuevo.",
                        type: "error",
                       showCancelButton: true,
                       confirmButtonColor: "#a08300",
                       confirmButtonClass: "btn-danger",
                       confirmButtonText: "Aceptar",

                   })
                }

            }
        });
    }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
                       swal({
                title: "Cancelado",
                text: "El proceso se ha cancelado",
                type: "error",
               showCancelButton: false,
               confirmButtonColor: "#a08300",
               confirmButtonClass: "btn-danger",
               confirmButtonText: "Aceptar",

           })
        }
    })
});


$('.detalleestatus').on( 'click', function () {
    $(".cargando2").show();
    window.location.href = route('inicio');
});
