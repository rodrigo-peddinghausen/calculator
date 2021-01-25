let valorDisplay = '';

let count = 0;

let contas = [];
let resultados = [];

alert(`Basta abrir, fazer algumas contas e clicar para fechar! :D`)


$('.entra').click(function(){
    $('.master').show();
    $('#btnFecha').show();
    $('.entra').hide();
})


$('.botaoNum').click(function(){
    if(count==0){
        $('.calcDisplay').val($('.calcDisplay').val() + $(this).val());
    }
    else{
        $('.calcDisplay').val('');
        $('.calcDisplay').val($('.calcDisplay').val() + $(this).val());
        valorDisplay = '';
        count = 0;
    }
});

$('.botaoClear').click(function(){
    $('.calcDisplay').val('');
    valorDisplay = '';
});

$('.botaoOp').click(function(){
    valorDisplay = $('.calcDisplay').val() + $(this).val();
    $('.calcDisplay').val('');
});

$('.botaoRes').click(function() {
    if(count == 0){
        let valorFinal = valorDisplay + $('.calcDisplay').val();
        $('.calcDisplay').val('');
        $('.calcDisplay').val(eval(valorFinal));
        contas.push(valorFinal);
        resultados.push(eval(valorFinal));
        count++;
    }
});

$('.btnComma').click(function(){
    $('.calcDisplay').val($('.calcDisplay').val() + '.');
});

$('#btnFecha').click(function(){
    $('table').hide();
    $('input').hide();
    $('.master').animate({
        'width': 500,
        'height': 500
    },
    {
        duration: 1000,
        complete:function(){
            $('.master').append('<h1>Contas<h1>');
            $('.master').append('<ul id="lista"></ul>');
            resultados.forEach(adicionaLi);
        }
    });
});


function adicionaLi(item, index, arr){
    $('#lista').append(`<li> ${contas[index]} = ${resultados[index]}</li>`);
}