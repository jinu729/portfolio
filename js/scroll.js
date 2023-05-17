/// <reference path="../js/jquery.d.ts"/>


//페이지 스크롤
$('.page').on('mousewheel',function(e, d){
    // console.log(e);
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

$(window).on('scroll',function(e){

    var scr = Math.floor($(window).scrollTop());
    var ht = $('.page').eq(0).height();
    console.log(ht);
    if(scr >= 0 && scr < ht){
        $('.gnb, header ul li').find('a').css({
            'textDecoration':'none'
        });
        $('.gnb, header ul li').eq(1).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(2).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(3).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(4).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(0).find('a').css({
            'textDecoration':'none',
            'font-size':'16px'
        });
    }else if(scr >= ht && scr < ht*2){
        $('.gnb, header ul li').find('a').css({
            'textDecoration':'none'
        });
        $('.gnb, header ul li').eq(0).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(2).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(3).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(4).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(1).find('a').css({
            'textDecoration':'underline',
            'font-size':'20px'
        });
    }else if(scr >= ht*2 && scr < ht*3){
        $('.gnb, header ul li').find('a').css({
            'textDecoration':'none'
        });
        $('.gnb, header ul li').eq(0).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(1).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(3).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(4).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(2).find('a').css({
            'textDecoration':'underline',
            'font-size':'20px'
        });
    }else if(scr >= ht*3 && scr < ht*4 ){
        $('.gnb, header ul li').find('a').css({
            'textDecoration':'none'
        });
        $('.gnb, header ul li').eq(0).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(1).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(2).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(4).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(3).find('a').css({
            'textDecoration':'underline',
            'font-size':'20px'
        });
    }else if(scr >= ht*4 && scr < ht*5){
        $('.gnb, header ul li').find('a').css({
            'textDecoration':'none'
        });
        $('.gnb, header ul li').eq(0).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(1).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(2).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(3).find('a').css('font-size','16px')
        $('.gnb, header ul li').eq(4).find('a').css({
            'textDecoration':'underline',
            'font-size':'20px'
        });
    }
})


//상단바
// -> li,a 동시에 적용
$('header ul li,header ul li a').on('click',function(e){
    // console.log(this);
    var ht = $('.page').eq(0).height();
    var index = $(this).index();
    var t = ht * index;
    $('html, body').stop().animate({
        'scrollTop':t
    },1000,'easeOutCirc');
    // if(index != 0){
    //     $('.gnb').eq(index).show().css({
    //         // 'textDecoration':'underline',
    //         // 'font-size': '20px'
    //     });
    //     $('header').css({'transition' : 'all 0.3s'});
    // }else{
    //     $('.gnb').show().css({
    //         // 'textDecoration':'none',
    //         // 'font-size': '16px'
    //     });
    //     $('header').css({'transition': 'all 0.3s'})
    // }
 
});

//about me
$(function(){
    $(window).scroll(function(){

        var pos = Math.floor($(this).scrollTop());
        if(pos>800){
            $('.aboutme .left_box').addClass('move1');
            $('.aboutme .right_box').addClass('move2');
        }else{
            $('.aboutme .left_box').removeClass('move1');
            $('.aboutme .right_box').removeClass('move2');
        }
    });
});

// $(window).on('scroll',function(){
    
//     var scr3 = Math.floor($(window).scrollTop());
//     var ht = $('.page').eq(0).height();
//     if(scr >= 0 && scr < ht){
//         $('.gnb').show().css({
//             'textDecoration':'none',
//             'font-size':'16px'
//         });
//     }else if(scr >= ht && scr < ht*2){
//         $('.gnb').eq(1).show().css({
//             'textDecoration':'underline',
//             'font-size':'20px'
//         });
//     }else if(scr >= ht*2 && scr < ht*3){
//         $('.gnb').eq(2).show().css({
//             'textDecoration':'underline',
//             'font-size':'20px'
//         });
//     }else if(scr >= ht*3 && scr < ht*4){
//         $('.gnb').eq(3).show().css({
//             'textDecoration':'underline',
//             'font-size':'20px'
//         });
//     }else{
//         $('.gnb').eq(4).show().css({
//             'textDecoration':'underline',
//             'font-size':'20px'
//         });
//         // return count();
//     }
// })











