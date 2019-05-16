    
$(document).ready(function () {

    $('.main_btn').on('click', function() {
        $('.overlay').animate({opacity: 'toggle'}, 1000);
        $('.modal').animate({height: 'toggle'}, 1000);
    });

    $('.main_btna').on('click', function() {
        $('.overlay').animate({opacity: 'toggle'}, 1000);
        $('.modal').animate({height: 'toggle'}, 1000);
    });
    
    $('nav > ul > li:eq(1)').on('click', function() {
        $('.overlay').animate({opacity: 'toggle'}, 1000);
        $('.modal').animate({height: 'toggle'}, 1000);
    });

    $('.close').on('click', function(){
        $('.overlay').animate({opacity: 'hide'}, 1000);
        $('.modal').animate({height: 'hide'}, 1000);
    });

});