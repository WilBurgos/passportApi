(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('form-control');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('focusout', function(event) {
                if( $(form).attr("required") ){
                    if( $(form).attr("id") ){
                        //console.log( $(form).attr("id") );
                        if( $(form).attr("id").includes('select2') == false ){
                            if( $(form).val() == '' || $(form).attr("aria-invalid") == "true" ){
                                $( '#'+$(form).attr("id") ).removeClass('is-valid');
                                $( '#'+$(form).attr("id") ).addClass('is-invalid');
                                //$( '#error_'+$(form).attr("id") ).show();
                            }else{
                                if( $(form).val() != '' || $(form).attr("aria-invalid") == "false" ){
                                    $( '#'+$(form).attr("id") ).removeClass('is-invalid');
                                    $( '#'+$(form).attr("id") ).addClass('is-valid');
                                    //$( '#error_'+$(form).attr("id") ).hide();
                                }
                            }
                        }else{
                            if( $(form).attr("id").includes('select2') == true ){
                                var idSelect = document.getElementById( $(form).attr("id") );

                                var hijo = $( '#'+$(form).attr("id")+'-container' ).children('span.select2-selection__placeholder')
                                if( hijo.text() == 'Seleccione la o las opciones' ){
                                    $( '#'+$(form).attr("id") ).removeClass('is-valid');
                                    $( '#'+$(form).attr("id") ).addClass('is-invalid');
                                }else{
                                    $( '#'+$(form).attr("id") ).removeClass('is-invalid');
                                    $( '#'+$(form).attr("id") ).addClass('is-valid');
                                }

                                if( idSelect.classList.contains("select2-selection--multiple") ){
                                    var hijo = $('#'+$(form).attr("id")).children('ul.select2-selection__rendered')
                                   var nieto = hijo.children('li.select2-search.select2-search--inline')
                                   var bisnieto = nieto.children('input.select2-search__field')
                                   if( bisnieto.attr('placeholder') == 'Seleccione la o las opciones' ){
                                        $( '#'+$(form).attr("id") ).removeClass('is-valid');
                                        $( '#'+$(form).attr("id") ).addClass('is-invalid');
                                    }else{
                                        $( '#'+$(form).attr("id") ).removeClass('is-invalid');
                                        $( '#'+$(form).attr("id") ).addClass('is-valid');
                                    }
                                }
                            }
                        }
                    }
                }
            }, false);
        });
    }, false);
})();

$( window ).on( "load", function() {
    var forms = document.getElementsByClassName('dropdown v-select single searchable input');//vs__selected-options
    for (x=0;x<forms.length;x++){
        // var idSelect = forms[x].getAttribute('id')
        // console.log(idSelect)
        var childrenDropTogg    = $('#'+$(forms[x]).attr("id")).children("div.dropdown-toggle");
        var childrenSelectedOpt = childrenDropTogg.children("div.vs__selected-options");
        var childrenInput       = childrenSelectedOpt.children("input");

        childrenDropTogg.attr("id", $(forms[x]).attr("id")+'_drop');
        childrenInput.attr("id", $(forms[x]).attr("id")+'_input');

        var validateSpan        = childrenSelectedOpt.html().includes('span');
        if( validateSpan == true ){
            $( '#'+$(forms[x]).attr("id")+'_drop' ).addClass('bordeParaSlectVueValid')
        }
    }
});