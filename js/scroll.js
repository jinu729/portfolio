/// <reference path="../js/jquery.d.ts"/>

$('.page').on('mousewheel',function(e, d){
    console.log(e);
    // d -> 휠 내릴때 -1. 휠 올릴때 1
    if( d < 0){
        var next = $(this).next().offset().top;
        $('html, body').stop().animate({
            "scrollTop":next
        },1000);

    }else if(d > 0){
        var prev = $(this).prev().offset().top;
        $('html, body').stop().animate({
            "scrollTop":prev
        },1000);
    }
});

