$(document).ready(function() {
    preloaderFadeOutTime = 1100;
    function hidePreloader(){
        var preloader = $('.spinner-wrapper');
            preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();

});

$(function(){  

    $('#botao').on('click',function(){
        $('#sidebar').toggle();
        $('#m_content').toggleClass('col-sm-12');
    });

    $('.select').select2();
   
    $('.arrow').addClass('text-muted');~

    /***************************************INSERTS***************************************/

    //ajax para cadastro de seguradoras...
    
    $('#form_seguradoras').on('submit',function(prevent){
            prevent.preventDefault();
            let dados = $(this).serialize();
            $.ajax({
                type:"POST",
                data:dados,
                url:'./ajax/saveSeguradoras',
                success:function(resultado){
                    $('#alerta').html("cadastro efetuado com sucesso");
                    $('#check').addClass('fas fa-check fa-x4 text-light');
                },
                error:function(){
                    $('#alerta').html("Ocorreu algum erro Interno!");
                }
        
            });

        $('#form_seguradoras')[0].reset();
        
        $('#result').fadeIn('slow');

        setTimeout(function(){
            $('#result').fadeOut('slow');
        },4000);
                
     });

    
     //ajax para cadastro de segurado particular...
    
    $('#form_particulares').on('submit',function(prevent){
        prevent.preventDefault();
        let dados = $(this).serialize();
        $.ajax({
            type:"POST",
            data:dados,
            url:'./ajax/saveSeguradoParticular',
            success:function(){
                $('#alerta').html("cadastro efetuado com sucesso");
                $('#check').addClass('fas fa-check fa-x4 text-light');
            },
            error:function(){
                $('#alerta').html("Ocorreu algum erro Interno!");
            }
    
        });

    $('#form_particulares')[0].reset();
    
    $('#result').fadeIn('slow');

    setTimeout(function(){
        $('#result').fadeOut('slow');
    },4000);
            
    });


  //ajax para cadastro de segurado empresarial...

    $('#form_empresarial').on('submit',function(prevent){
        prevent.preventDefault();
        let dados = $(this).serialize();
        $.ajax({
            type:"POST",
            data:dados,
            url:'./ajax/saveSeguradoEmpresarial',
            success:function(){
                $('#alerta').html("cadastro efetuado com sucesso");
                $('#check').addClass('fas fa-check fa-x4 text-light');
            },
            error:function(){
                $('#alerta').html("Ocorreu algum erro Interno!");
            }

        });

    $('#form_empresarial')[0].reset();

    $('#result').fadeIn('slow');

    setTimeout(function(){
        $('#result').fadeOut('slow');
    },4000);
            
    });


    /**************AJAX UTILIZADORES DO SISTEMA*************/

    //ajax para cadastro de utilizadores do sistema...
    
    $('#form_utilizadores').on('submit',function(prevent){
        prevent.preventDefault();
        let dados = $(this).serialize();
        $.ajax({
            type:"POST",
            data:dados,
            url:'./ajax/saveUsers',
            success:function(){
                $('#alerta').html("cadastro efetuado com sucesso");
                $('#check').addClass('fas fa-check fa-x4 text-light');
            },
            error:function(){
                $('#alerta').html("Ocorreu algum erro Interno!");
            }

        });

    $('#form_utilizadores')[0].reset();

    $('#result').fadeIn('slow');

    setTimeout(function(){
        $('#result').fadeOut('slow');
    },4000);
            
    });


     /**************END AJAX UTILIZADORES DO SISTEMA*************/


    
//AJAX PARA CADATSRO DE APOLICE PARTICULAR

 $('#form_apolice_particular').on('submit',function(prevent){
    prevent.preventDefault();
    let dados = $(this).serialize();
    let idtoma= $('#nome_tomador').val();
    let idsegura= $('#nome_segurado').val();
    let idsegu= $('#nome_seguradora').val();

    $.ajax({
        type:"POST",
        data:dados + '&idtomador='+idtoma+'&idsegurado='+idsegura+'&idseguradora='+idsegu+'',
        url:'./ajax/saveApoliceParticular',
        success:function(){
            $('#alerta').html("cadastro efetuado com sucesso");
            $('#check').addClass('fas fa-check fa-x4 text-light');
        },
        error:function(){
            $('#alerta').html("Ocorreu algum erro Interno!");
        }

    });

    $('#form_apolice_particular')[0].reset();

    $('#result').fadeIn('slow');

    setTimeout(function(){
        $('#result').fadeOut('slow');
    },4000);
            
    }); // End FOI MEXIDO



//Cadastro de APOLICE Empresarial---- FOI MEXIDO

$('#form_apolice_empresarial').on('submit',function(prevent){
    prevent.preventDefault();
    let dados = $(this).serialize();
    let idtoma= $('#nome_tomador').val();
    let idsegura= $('#nome_segurado').val();
    let idsegu= $('#nome_seguradora').val();

    $.ajax({
        type:"POST",
        data:dados + '&idtomador='+idtoma+'&idsegurado='+idsegura+'&idseguradora='+idsegu+'',
        url:'./ajax/saveApoliceEmpresarial',
        success:function(){
            $('#alerta').html("cadastro efetuado com sucesso");
            $('#check').addClass('fas fa-check fa-x4 text-light');
        },
        error:function(){
            $('#alerta').html("Ocorreu algum erro Interno!");
        }

    });

    $('#form_apolice_empresarial')[0].reset();

    $('#result').fadeIn('slow');

    setTimeout(function(){
        $('#result').fadeOut('slow');
    },4000);
            
}); // End FOI MEXIDO





  /**********************************************************/

                    //AJAX DE BUSCAS//

   /**********************************************************/


    
//Ajax busca ramos de seguro

    $('#nome_seguradora').change(function(){
        if( $(this).val() ) {
            $('.carregando').show();
            $('#ramo_seguro').hide();
            $.getJSON('./ajax/getRamos?search=',{idseg: $(this).val(), ajax: 'true'}, function(json){

                var options = '<option value="">Escolha o ramo</option>';	
                
                if(json.ramos.length>0){
                    for (var i in json.ramos) {
                        options += '<option value="' + json.ramos[i].idramos+ '">' + json.ramos[i].ramo + '</option>';
                    }	
                    $('#ramo_seguro').html(options).show();
                    $('.carregando').hide();
                            
                }else{
                    $('.carregando').hide();
                    $('#ramo_seguro').html('<option value="">Escolha ramo</option>');
                }
            });
        } else {
            $('#ramo_seguro').html('<option value="">Escolha ramo</option>');
        }
    });

// Ajax busca de tipos de seguro com base no ramo

$('#ramo_seguro').change(function(){
    if( $(this).val() ) {
        $('.carregando').show();
        $('#tipo_seguro').hide();
        $.getJSON('./ajax/ajaxGetTipoSeguro?search=',{idramo: $(this).val(), ajax: 'true'}, function(json){

            var options = '<option value="">Escolha o tipo de seguro</option>';	
            
            if(json.tiposeguro.length>0){
                for (var i in json.tiposeguro) {
                    options += '<option value="' + json.tiposeguro[i].idcomissao+ '">' + json.tiposeguro[i].tipos + '</option>';
                }	
                $('#tipo_seguro').html(options).show();
                $('.carregando').hide();
                        
            }else{
                $('.carregando').hide();
                $('#tipo_seguro').html('<option value="">Escolha o tipo de seguro</option>');
            }
        });
    } else {
        $('#tipo_seguro').html('<option value="">Escolha o tipo de seguro</option>');
    }
});

//Ajax para busca de percentagem de comissao...

    $('#tipo_seguro').change(function(){
        if( $(this).val() ) {
            $('.carregando2').show();
            $('#percentagem').hide();
            $.getJSON('./ajax/ajaxGetPercent?search=',{id_percent: $(this).val(), ajax: 'true'}, function(jSon){
                if(jSon.percent.length>0){
                    for (var i in jSon.percent) {
                    var  opts = '<option value="' + jSon.percent[i].idcomissao+ '">' + jSon.percent[i].total + '</option>';
                    }	
                    $('#percentagem').html(opts).show();
                    $('.carregando2').hide();
                }else{
                    $('.carregando2').hide();
                    $('#percentagem').html('<option value="">0</option>');
                }
            });
        } else {
            $('#percentagem').html('<option value="">0</option>');
        }
    });

    //AJAX BUSCA DE APOLICE PARTICULAR POR NR DE APOLICE

     $('#apolicepart').change(function(){
        if( $(this).val()) {
            $.getJSON('./ajax/getApolicePart?search=',{nrapolicepart: $(this).val(), ajax: 'true'}, function(jSon){
                if(jSon.apolice.length>0){
                   $('#apolicePart>tbody').empty();
                    for (let i in jSon.apolice) {
                        $('#apolicePart>tbody').append(                  
                            '<tr>'+
                            '<td>'+jSon.apolice[i].idapolicepart+'</td>'+
                            '<td>'+jSon.apolice[i].nrapolicepart+'</td>'+
                            '<td>'+jSon.apolice[i].segurado+'</td>'+
                            '<td>'+jSon.apolice[i].tomador+'</td>'+
                            '<td>'+jSon.apolice[i].seguradora+'</td>'+
                            '<td>'+jSon.apolice[i].ramo+'</td>'+
                            '<td>'+jSon.apolice[i].objectosegurado+'</td>'+
                            '<td>'+jSon.apolice[i].capitalseguro+'</td>'+
                            '<td>'+jSon.apolice[i].premio+'</td>'+
                            '<td>'+jSon.apolice[i].tipos+'</td>'+
                            '<td>'+jSon.apolice[i].modalidade_pagamento+'</td>'+
                            '<td>'+jSon.apolice[i].data_emissao+'</td>'+
                            '<td>'+jSon.apolice[i].data_vencimento+'</td>'+
                            '<td>'+jSon.apolice[i].data_vencimento+'</td>'+
                            '<td>'+jSon.apolice[i].descricao_objecto+'</td>'+
                            '<tr>'
                        );
                    }	  
                }     
          });
        }
    });
        
    //AJAX BUSCA DE APOLICE EMPRESARIAL POR NR DE APOLICE

    $('#nrapoliceemp').change(function(){
        if( $(this).val()) {
            $.getJSON('./ajax/getApoliceEmpre?search=',{nrapoliceemp: $(this).val(), ajax: 'true'}, function(jSon){
                if(jSon.apolice.length>0){
                    $('#apoliceEmpre>tbody').empty();
                    for (let i in jSon.apolice) {
                        $('#apolicePart>tbody').append(                  
                            '<tr>'+
                            '<td>'+jSon.apolice[i].idapolicepart+'</td>'+
                            '<td>'+jSon.apolice[i].nrapolicepart+'</td>'+
                            '<td>'+jSon.apolice[i].segurado+'</td>'+
                            '<td>'+jSon.apolice[i].tomador+'</td>'+
                            '<td>'+jSon.apolice[i].seguradora+'</td>'+
                            '<td>'+jSon.apolice[i].ramo+'</td>'+
                            '<td>'+jSon.apolice[i].objectosegurado+'</td>'+
                            '<td>'+jSon.apolice[i].capitalseguro+'</td>'+
                            '<td>'+jSon.apolice[i].premio+'</td>'+
                            '<td>'+jSon.apolice[i].tipos+'</td>'+
                            '<td>'+jSon.apolice[i].modalidade_pagamento+'</td>'+
                            '<td>'+jSon.apolice[i].data_emissao+'</td>'+
                            '<td>'+jSon.apolice[i].data_vencimento+'</td>'+
                            '<td>'+jSon.apolice[i].data_vencimento+'</td>'+
                            '<td>'+jSon.apolice[i].descricao_objecto+'</td>'+
                            '<tr>'
                        );
                    }	  
                }     
          });
        }
    });
});




    

$(document).ready(function() {
    
    //Ajax add new campos de tabelas de comissoes

    let iterador =1;

        $("#adicionarComi").click(function(){
            iterador++;
            $("#campos_comi").append(
            '<div id="linha '+iterador+'" class="input-group-prepend mt-3">'+
                '<span id="span" class="input-group-text">Preencha *</span>'+
                '<input id="input" type="text" name="tipos[]" placeholder="Tipo de Seguro" class="form-control tipo" required/> '+  
                '<input id="input" type="text" name="angariacao[]" placeholder="Angariacao" class="form-control angariacao" required/> '+
                '<input id="input" type="text" name="cobranca[]" placeholder="Cobranca" class="form-control cobranca" required/>'+
                '<input id="input" type="text" name="corretagem[]" placeholder="Corretagem" class="form-control corretagem " required />'+ 
                '<input id="input" type="text" name="total[]" placeholder="Total" class="form-control mr-2 total" required/> '+
                '<a idrem="'+iterador+'" class="btn btn-sm btn-danger btn_remover txt-light ml-2" style="padding-left: 16px;padding-right: 16px;"><i class="fas fa-times text-light fa-lg"></i></a>'+
            '</div>');
        });


    //Ajax remove campos de tabelas de comissoes
        $('#campos_comi').on('click','.btn_remover',function(prev){
            prev.preventDefault();
            $(this).parent('div').remove();
            iterador--;
        });

    //Ajax Insere campos de tabelas de comissoes no banco de dados

    $("#form_comissoes").on('submit',function(prevComi){
        
        prevComi.preventDefault();

        let fields = $(this).serialize();
        let fkfield = $('#nome_seguradora').val();
        let fkramos = $('#ramo_seguro').val();
        $.ajax({
            type:"POST",
            url:"./ajax/savetabelasComissao",
            data:fields +'&idseg='+fkfield+''+'&fkramos='+fkramos+'',
            success:function(){
                $('#alerta').html("cadastro efetuado com sucesso")
                $('#check').addClass('fas fa-check fa-x4 text-light')
            },
            error:function(){
                $('#alerta').html("Ocorreu algum erro Interno!")
            }
        });

        $('#form_comissoes')[0].reset();
        
        $('#result').fadeIn('slow');

        setTimeout(function(){
            $('#result').fadeOut('slow');
        },4000);
        

    });


//ajax delete users
    $('.remover').click(function(){
    let elemento = this;
    let data_id=$(this).data('id');
    let confirmar= confirm("Tem Certeza?");

    if(confirmar==true){
        $.ajax({
            type:"POST",
            data:{id:data_id},
            url:'./ajax/deleteUsers',
            success:function(){
                $(elemento).closest('tr').css('background','tomato');
                $(elemento).closest('tr').fadeOut('fast',function(){
                    $(this).remove();
                });
            
                $('#alerta').html("Eliminado com sucesso");
                $('#check').addClass('fas fa-check fa-x4 text-light');
            },
            error:function(){
                $('#alerta').html("Ocorreu algum erro Interno!");
            }

        });       
    }

    $('#result').fadeIn('slow');

    setTimeout(function(){
        $('#result').fadeOut('slow');
    },4000);
    
});


    

});
