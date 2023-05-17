$(window).on('scroll',function(){
    let scr = Math.floor($(window).scrollTop());
    let ht =$('.page').eq(0).height();
    if(scr >= 0 && scr < ht){
        $('.li2').hide();
        $('.li1').show().css('textDecoration','none');
        $('header').css({
            'width':'30%',
            'transition':'all 0.5s'
        });
        $('#pager li').stop().animate({
            'top': '20px'
        },300,"easeOutBounce");
        $('#pager li').stop().hide();
        $('#pager').stop().hide();
        aboutremove();
        $('.cls1').removeClass('cani01');
        $('.cls2').removeClass('cani02');
        $('.cls3').removeClass('cani03');
        workremove();
    }else if(scr >= ht && scr < ht*2){
        $('.li1').hide();
        $('.li2').show();
        $('.li2').eq(1).hide();
        $('.li1').eq(1).show().css('textDecoration','underline');
        $('header').css({
            'width':'20%',
            'transition':'all 0.5s'
        });
        $('#pager').show();
        $('#pager li').show();
        $('#pager li').stop().animate({
            'top': '50px'
        },300,"easeOutBounce");
        aboutmove();
        $('.cls1').removeClass('cani01');
        $('.cls2').removeClass('cani02');
        $('.cls3').removeClass('cani03');
        workremove();
    }else if(scr >= ht*2 && scr < ht*3){
        $('.li1').hide();
        $('.li2').show();
        $('.li2').eq(2).hide();
        $('.li1').eq(2).show().css('textDecoration','underline');
        $('#pager li').stop().animate({
            'top': '80px'
        },300,"easeOutBounce");
        aboutremove();
        count();
        $('.cls1').addClass('cani01');
        $('.cls2').addClass('cani02');
        $('.cls3').addClass('cani03');
        workremove();
    }else if(scr >= ht*3 && scr < ht*4){
        $('.li1').hide();
        $('.li2').show();
        $('.li2').eq(3).hide();
        $('.li1').eq(3).show().css('textDecoration','underline');
        $('#pager li').stop().animate({
            'top': '110px'
        },300,"easeOutBounce");
        aboutremove();
        $('.cls1').removeClass('cani01');
        $('.cls2').removeClass('cani02');
        $('.cls3').removeClass('cani03');
        workmove();
    }else{
        $('.li1').hide();
        $('.li2').show();
        $('.li2').eq(4).hide();
        $('.li1').eq(4).show().css('textDecoration','underline');
        $('#pager li').stop().animate({
            'top': '140px'
        },300,"easeOutBounce");
        aboutremove();
        $('.cls1').removeClass('cani01');
        $('.cls2').removeClass('cani02');
        $('.cls3').removeClass('cani03');
        workremove();
        return count();
        
    }
});