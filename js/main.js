/// <reference path="jquery.d.ts"/>/

// skill 화면 
var scr = $(window).scrollTop();
$(window).scroll(function(){
    var scr = $(this).scrollTop();
    // console.log(scr);
    if(scr >= 1774){
        $('.wrap .box .st1').addClass('add');
    }else{
        $('.wrap .box .st1').removeClass('add');
    }
    if(scr >= 1774){
        $('.wrap .box .st2').addClass('add2');
    }else{
        $('.wrap .box .st2').removeClass('add2');
    }
    if(scr >= 1774){
        $('.wrap .box .st3').addClass('add3');
    }else{
        $('.wrap .box .st3').removeClass('add3');
    }
});

//work 화면
var flag = false;
$(function(){
    $('#work .btnleft').click(function(){  
        // flag = true;
        $('#work .slide').last().prependTo('#work .slide_wrap');
        $('#work .slide_wrap').css({left:'-33.5%'})
        $('#work .slide_wrap').stop().animate({left:'0'},1000, function(){
        });
    })
    $('#work .btnright').click(function(){
        console.log(flag);
        if(flag == true){
            return;
        }
        flag = true;
        $('#work .slide_wrap').stop().animate({left:'-33.5%'},2000,function(){
        });
        setTimeout(() => {
            $('#work .slide').first().appendTo('#work .slide_wrap');
            $('#work .slide_wrap').css({left:'0'});
            flag = false;
        }, 2100);
    });
    var play = setInterval(function(){
        $('#work .btnright').trigger('click');
        // console.log(flag);
    },4000)
});

var scr2 = $(window).scrollTop();
$(window).scroll(function(){
    var scr2 = $(this).scrollTop();
    // console.log(scr2);
    if(scr >= 2170){
        $('#work .slide_wrap').addClass('add');
    }else{
        $('#work .slide_wrap').removeClass('add');
    }
    // if(scr >= 1774){
    //     $('.wrap .box .st2').addClass('add2');
    // }else{
    //     $('.wrap .box .st2').removeClass('add2');
    // }
    // if(scr >= 1774){
    //     $('.wrap .box .st3').addClass('add3');
    // }else{
    //     $('.wrap .box .st3').removeClass('add3');
    // }
});