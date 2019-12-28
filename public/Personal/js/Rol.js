$(document).ready(function(){
    tablaroles = $('#TablaVistaRol').DataTable({
        "responsive": true,
        "fixedHeader": true,
        "processing": true,
        // "serverSide": true,
        "pageLength": 10,
        "searching": true,
        // buttons: ['excel'],
        'ajax': {
            "type": "GET",
            "url" :  route('tabla.roles'),
        },
        'columns': [
            {data:"tiporol", className: 'text-center'},
            // {data:"permisos", className: 'text-left'},
            // {data:"sistemas", className: 'text-center'},
            {data:"acciones" , className: 'text-center'}
        ],
        language: {
            "decimal":        "",
            "emptyTable":     "No hay datos",
            "info":           "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty":      "Mostrando 0 a 0 de 0 registros",
            "infoFiltered":   "(Filtro de _MAX_ total registros)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "Mostrar _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing":     "Procesando...",
            "search":         "Buscar:",
            "zeroRecords":    "No se encontraron coincidencias",
            "paginate": {
                "first":      "Primero",
                "last":       "Ultimo",
                "next":       "Próximo",
                "previous":   "Anterior"
            },
            "aria": {
                "sortAscending":  ": Activar orden de columna ascendente",
                "sortDescending": ": Activar orden de columna desendente"
            }
        }
    }).ajax.reload();
});


function EditRol(id){
    // console.log(id);

    // $.ajax({
    //     type: "POST",
    //     headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    //     url:route('get.rol'),
    //     data:{
    //         idRol:id,
    //           },
    //     dataType: "JSON",
    //     success: function (data) {
    //     //   console.log(data);
    //         // $('#perm option').remove();
    //         // $('#perm').append(data.options);
    //         // $('#perm').select2("val",data.options.id);
    //     }

    // });

    $('#idRol').val(id);
    texto = $('#nombreRol'+id).val();
    $('#rol').val(texto);
    // console.log('aqui: ', id, texto);

}
function actualizaRol(){
    var texto = $('#rol').val();
    var id = $("#idRol").val();
    // var permiso =$('#perm').val();
    // var sistemas = $('#sistema').val();
    
    // console.log("aqui estoy: | ", sistemas ,'|');

    // if (sistemas != 'Seleccione una Opcion') {
    if (texto != '') {
            
        $.ajax({
            type: "POST",
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            url:route('actualizar.rol', id),
            data:{
                texto:texto,
                idRol:id,
                // perm:permiso,
                // sistema:sistemas,
            },
            dataType: "JSON",
            success: function (data) {
                console.log(data);
                $('#ModalEditar').modal('hide');
                swal({
                    title: "Se ha actualizado el Rol",
                    type:"success",
                    showCancelButton: false,
                    confirmButtonColor: "#a08300",
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                })
                tablaroles.ajax.reload();
            }
        });
    } else {
        swal("¡ERROR!", "debe ingresar un nuevo nombre", "error");
        // swal("¡ERROR!", "No ha seleccionado un Sistema", "error");
    }
    console.log("ahora aqui: ", id, texto);
}


function eliminar(id){

    var _token = $('meta[name="csrf-token"]').attr('content')
    // console.log("Este es el token"+_token);
    swal({
        title: "¿Está seguro?",
        text: "Se eliminara este rol de usuario",
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
            url: route('eliminar.rol',id),
            dataType: "JSON",
            success : function() {
                swal({
                    title: "Se ha eliminado el Rol",
                    type:"success",
                   showCancelButton: false,
                   confirmButtonColor: "#a08300",
                   confirmButtonClass: "btn-danger",
                   confirmButtonText: "Ok",
                  })
                tablaroles.ajax.reload();
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
                confirmButtonText: "Ok",
            })
        }
    });
}

$('.rolRegresar').on( 'click', function () {
    $(".cargando").show();
    window.location.href = route('inicio');
});


