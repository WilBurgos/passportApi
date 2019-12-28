$(document).ready(function(){

tablapermisos =  $('#tablaPermisos').DataTable({
            "responsive": true,
            "fixedHeader": true,
            "processing": true,
            // "serverSide": true,
            "pageLength": 10,
            "searching": true,
            // buttons: ['excel'],
            'ajax': {
                "type": "GET",
                "url" :  route('tabla.permiso'),
            },
            'columns': [
                {data:"permiso", className: 'text-center'},
                {data:"guard_name", className: 'text-center'},
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
            },
        }).ajax.reload();

});

function EditPerm(id){
    $('#idPermiso').val(id);
    texto = $('#nombrePerm'+id).val();
    $('#permiso').val(texto);
}
function actualiza(){
    texto = $('#permiso').val();
    id =$("#idPermiso").val();
    $.ajax({
      type: "POST",
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      url:route('updatePermiso'),
      data:{
          texto:texto,
          idPermiso:id,
            },
      dataType: "JSON",
      success: function (data) {
        console.log(data);
        $('#ModalEditar').modal('hide');
        swal({
          title: "Se ha actualizado el permiso",
          type:"success",
         showCancelButton: false,
         confirmButtonColor: "#a08300",
         confirmButtonClass: "btn-danger",
         confirmButtonText: "Ok",
        })
        tablapermisos.ajax.reload();
      }
    });
}

function newPermiso(){
    permiso = $('#Addpermiso').val();
    gname =$("#Newpermiso").val();
    $.ajax({
      type: "POST",
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      url:route('addPermiso'),
      data:{
          permiso:permiso,
          gname:gname,
            },
      dataType: "JSON",
      success: function (data) {
        console.log(data);
        $('#ModalNuevoP').modal('hide');
        swal({
          title: "Se ha creado un nuevo permiso",
          type:"success",
         showCancelButton: false,
         confirmButtonColor: "#a08300",
         confirmButtonClass: "btn-danger",
         confirmButtonText: "Ok",
        })
        tablapermisos.ajax.reload();
      }
     });
}

function Eliminar(id){
  var _token = $('meta[name="csrf-token"]').attr('content')
  swal({
    title: "¿Está seguro?",
    text: "Eliminará el permiso",
    type: "warning",
   showCancelButton: true,
   confirmButtonColor: "#a08300",
   confirmButtonClass: "btn-danger",
   confirmButtonText: "Aceptar",
   cancelButtonText: "Cancelar",
  //  closeOnConfirm: false,
   showLoaderOnConfirm: true
  }).then(function () {
    $.ajax({
      type:"POST",
      // data:{
      //   'id':id,
      // '_token':_token
      // },
      cache: false,
      // url: '{!! route('destroy') !!}'
      url:route('destroy', {id:id}),
      dataType: "JSON",
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      success : function() {
        // console.log(data);
        swal({
          title: "Se ha eliminado el permiso",
          type:"success",
         showCancelButton: false,
         confirmButtonColor: "#a08300",
         confirmButtonClass: "btn-danger",
         confirmButtonText: "Ok",
        })
        tablapermisos.ajax.reload();
      }

    });
  }, function (dismiss) {

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
}

$('.permisoRegresar').on( 'click', function () {
    $(".cargando").show();
    window.location.href = route('inicio');
});
