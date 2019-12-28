$(document).ready(function(){
    $('#tablaUnidades').DataTable({
        "responsive": true,
        "fixedHeader": true,
        "processing": true,
        // "serverSide": true,
        "pageLength": 25,
        "searching": true,
        // buttons: ['excel'],
        'ajax': {
            "type": "GET",
            "url" :  route('tabla.unidades'),
        },
        'columns': [
            // {data:"id", className: 'hidden-xs'},
            {data:"usuario", className: 'text-center'},
            {data:"region", className: 'text-center'},
            {data:"unidad", className: 'text-center'},
            {data:"num_fiscal", className: 'text-center'},
            {data:"rol", className: 'text-center'},
            {data:"acciones" , className: 'text-center'}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
          }
    });
});

function EditPassw(id){
    $('#idPassword').val(id);  
    // console.log('primero: ', id);  
    texto = $('#newpassw').val();
}
function cambPassw(){
    var caract_longitud = 12;
    var caract_minlongitud = 3;
    var text1 = $('#idNewpw1').val();
    // console.log('En el CambPassw: ',text1);
    var texto = $('#newpassw').val();
    var id =$("#idPassword").val();
    // console.log('Entrando al CambPassw: ', id, texto);
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
                    $('#idNewpw1').val('');
                    $('#newpassw').val('');
                    swal("¡Bien!", "Se actualizó la contraseña", "success");
                    }
                });

            } else {
                
                swal({
                    title: "¡ERROR!",
                    text: "Confirmación incorrecta, vuelva a intentarlo",
                    type: "error",
                   showCancelButton: false,
                   confirmButtonColor: "#a08300",
                   confirmButtonClass: "btn-danger",
                   confirmButtonText: "Aceptar",
          
               })
                    $('#idNewpw1').val('');
                    $('#newpassw').val('');

            }

        } else {

            swal("¡ERROR!", "La Contraseña debe tener mínimo 4 y máximo de 12 caracteres", "error");
            $('#idNewpw1').val('');     
            $('#newpassw').val('');


        }

    } else {

        swal("¡ERROR!", "No ha ingresado la nueva contraseña", "error");
        $('#idNewpw1').val('');
    
    }
}

// $('#idNewpw1')[0].reset();
// Confirmación incorrecta, vuelva a intentarlo