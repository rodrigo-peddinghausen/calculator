let valorDisplay = '';

$('.botaoNum').click(function(){
    $('.calcDisplay').val($('.calcDisplay').val() + $(this).val());
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
    let valorFinal = valorDisplay + $('.calcDisplay').val();
    $('.calcDisplay').val('');
    $('.calcDisplay').val(eval(valorFinal));
});

$('.btnComma').click(function(){
    $('.calcDisplay').val($('.calcDisplay').val() + '.');
})
