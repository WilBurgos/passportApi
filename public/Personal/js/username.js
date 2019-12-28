$( document ).ready(function() {
    $('#nombre,#apellido1,#apellido2').on( 'change', function () {
        var nombres = $('#nombre').val()
        var primer_ap = $('#apellido1').val()
        var segundo_ap = $('#apellido2').val()
        if( nombres != '' && primer_ap != '' && segundo_ap != '' ){
            $.ajax({
                type: "POST",
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                url:route('create.username'),
                data:{
                    nombres: nombres,
                    primer_ap:primer_ap,
                    segundo_ap:segundo_ap,
                },
                dataType: "JSON",
                success: function (data) {
                    $('#username').val(data)
                    $('#username').addClass('is-valid')
                },
                error: function(data) {
                    console.log(data)
                }
            });
        }else{
            $('#username').val('')
            $('#username').removeClass('is-valid')
        }
    });
});