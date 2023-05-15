
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

$(function(){
    $('#work .btnleft').click(function(){
        $('#work .slide').last().prependTo('#work .slide_wrap');
        $('#work .slide_wrap').css({left:'-300px'})
        $('#work .slide_wrap').stop().animate({left:'0'},1000)
    })
    $('#work .btnright').click(function(){
        $('#work .slide_wrap').stop().animate({left:'-300px'});
        setTimeout(function(){
            $('#work .slide').first().appendTo('#work .slide_wrap');
            $('#work .slide_wrap').css({left:'0%'});
        })
    })
});