//funcão para abrir o menu
$('.perfil').click(function () {
    var menu_item = $('.list-actions');

    if (menu_item.is(':hidden')) {
        menu_item.show('fast');

    }
    else {
        menu_item.hide('fast');
    }
});


    
    $('#firstli').click(function(){
        $(this).find('#iconchange').toggleClass('fa-chevron-right')
    });


$('.openText').click(function () {

    var text_par = $('.textPar')

    if (text_par.is(':hidden')) {
        text_par.show(500);
     

    }
    else {
        text_par.hide(500);
    }
});
//    $('#btn-perfil').click(function(){
//     var menu_item = $('');
//     if (menu_item.is(':hidden') ){
//        menu_item.show('slow');
//     else {
//        menu_item.hide('slow');
function Relogio() {
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    min = adicionazero(min);
    seg = adicionazero(seg);
    var relogio = document.getElementById('relogio');
    relogio.textContent = hora + ':' + min + ':' + seg;
    var passaTempo = setInterval(Relogio, 1000);
}

function adicionazero(minouseg) {
    if (minouseg < 10) {
        minouseg = "0" + minouseg;
    }
    return minouseg;

}


Relogio();
