
//Tabla de Bitacora
$(document).ready(function(){
    tableBitacora = $('#tablaBitacUser').DataTable({
        "responsive": true,
        "fixedHeader": true,
        "processing": true,
        // "serverSide": true,
        "pageLength": 25,
        "searching": true,
        // buttons: ['excel'],
        'ajax': {
            "type": "GET",
            "url" :  route('table.bitacora'),
        },
        'columns': [
            {data:"id", className: 'text-center'},
            // {data:"usuario", className: 'text-center'},
            {data:"descripcion", className: 'text-center'},
            {data:"fechamodi" , className: 'text-center'}
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
