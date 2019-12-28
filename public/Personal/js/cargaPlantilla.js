$(document).ready(function () {
    $("#cargarP").click(function(event){

        if ($('#csv').val()) {

            //Image preview


            $('#preloader').css('display','block');
            // var post_url = "{{ route('importar-plantilla') }}"; //get form action url
            // var request_method = "POST"; //get form GET/POST method
            elemento = document.getElementById('cargaPersonal');
            var form_data = new FormData(elemento);

            $.ajax({
                url : route('importar-plantilla'),
                type: "POST",
                data : form_data,
                contentType: false,
                cache: false,
                processData:false,
                success:function (response) {
                    $('#preloader').css('display','none');
                    // $('#alertSuccess').show()
                    swal({
                        title: "Exito!",
                        text: "Se ha cargado con exito",
                        type: "success"
                    }).then(function() {
                        window.location.href = route('inicio');
                    });
                    // console.log(response);
                    // tablaRegistrados.ajax.reload();
                },
                error: function(response) {
                    $('#preloader').css('display','none');
                    swal({
                        title: "Intente de nuevo",
                        text: "Ha ocurrido un error.",
                        type: "error",
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-lg btn-danger',
                        confirmButtonText: "Aceptar",
                        // closeOnConfirm: true
                    });
                    console.log(response);
                    // tablaRegistrados.ajax.reload();
                }
            });
        } else {
            swal({
                title: "Falta archivo",
                text: "Se debe cargar un archivo.",
                type: "error",
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-lg btn-danger',
                confirmButtonText: "Aceptar",
                // closeOnConfirm: true
            });
            // swal({
            //     type: 'warning',
            //     title: 'Warning',
            //     text: 'Here is the warning alert text',
            //     buttonsStyling: false,
            //     confirmButtonClass: 'btn btn-lg btn-warning'
            // })
        }
    });

    $('.agregar').on( 'click', function () {
        $(".AgUsuario").show();
        window.location.href = route('agregar');
    });



    $('#csv').on('change', function(){
        var ext = $( this ).val().split('.').pop();
        if ($( this ).val() != '') {
          if(ext == "csv"){
             console.log("La extensión es: " + ext);
        //     if($(this)[0].files[0].size > 100000){
        //       console.log("El documento excede el tamaño máximo");
        //       $('#modal-title').text('¡Precaución!');
        //       $('#modal-msg').html("Se solicita un archivo no mayor a 1MB. Por favor verifica.");
        //       $("#modal-gral").modal();
        //       $(this).val('');
        //     }else{
        //       $("#modal-gral").hide();
        //     }
          }
          else
          {
            $( this ).val('');
            swal({
                title: "Extensión no permitida: " + ext,

                type: "error",
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-lg btn-danger',
                confirmButtonText: "Aceptar",
                // closeOnConfirm: true
            });


          }
        }
      });


});
