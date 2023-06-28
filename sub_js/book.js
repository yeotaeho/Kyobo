//북호버
$(document).ready(function(){
	$('.c_front').hover(function(){
        $('.book').css({"transform":"rotateY(-30deg)","transition":"transform .3s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
    },function(){
        $('.book').css({"transform":"rotateY(0deg)","transition":"transform .3s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
    })

    $('.c_back').mouseover(function(){
        $('.book').css({"transform":"rotateY(-180deg)","transition":"transform .3s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
        $('.c_front').css({"transform":"translate3d(0,0,140px)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
        $('.c_back').css({"transform":"rotateY(-180deg) translateZ(0px)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
        $('.c_right').css({"transform":"rotateY(90deg) translate3d(-70px,0,175px)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
    });

    $('.c_front').click(function(){
        $('.book').css({"transform":"rotateY(-180deg) translate3d(0,0,0)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
        $('.c_front').css({"transform":"translate3d(0,0,140px)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
        $('.c_back').css({"transform":"rotateY(-180deg) translateZ(0px)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
        $('.c_right').css({"transform":"rotateY(90deg) translate3d(-70px,0,175px)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
    });

    $('.c_back').click(function(){
        $('.book').css({"transform":"rotateY(0deg) translate3d(0,0,0)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
        $('.c_front').css({"transform":"translate3d(0,0,0px)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
        $('.c_back').css({"transform":"rotateY(-180deg) translateZ(140px)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
        $('.c_right').css({"transform":"rotateY(90deg) translate3d(70px,0,175px)","transition":"transform .4s cubic-bezier(0.45, 0.05, 0.55, 0.95)"});
    });

    $(window).scroll(function(){ 
        //윙배너
        if($(this).scrollTop() > 350){
            $('#fly_menu').css({"position":"fixed","top":"160px"})
        }else{
            $('#fly_menu').css({"position":"absolute","top":"480px"})
        }
        //serch_bar
        if($(this).scrollTop() > 205){
            $('#serch_bar').css({"position":"fixed","top":"0px","border-bottom":"1px solid #c0c0c0","z-index":"100"})
        }else{
            $('#serch_bar').css({"position":"relative","border":"none","z-index":"0"})
        }
        //목록
        if($(this).scrollTop() > 1400){
            $('#list').css({"position":"fixed","top":"0","margin-top":"82px","background-color":"#fff"})
            $('.tabs').find('li:first').css({"color":"#000","border-bottom":"2px solid #000"})
        }else{
            $('#list').css({"position":"relative","margin-top":"110px"});
            $('.tabs').find('li:first').css({"color":"#767676","border":"none"})
        }

        if($(this).scrollTop() > 10000){
            $('.tabs').find('li').eq(1).css({"color":"#000","border-bottom":"2px solid #000"})
            $('.tabs').find('li').eq(1).siblings().css({"color":"#767676","border":"none"})
        }else{
            $('.tabs').find('li').eq(1).css({"color":"#767676","border":"none"})
        }

        if($(this).scrollTop() > 12700){
            $('.tabs').find('li').eq(2).css({"color":"#000","border-bottom":"2px solid #000"})
            $('.tabs').find('li').eq(2).siblings().css({"color":"#767676","border":"none"})
        }else{
            $('.tabs').find('li').eq(2).css({"color":"#767676","border":"none"})
        }
        console.log($(this).scrollTop());
     });

     //목록(상품정보,리뷰,교환/반품/품절) 클릭
     $('.tabs').find('li').click(function(){
        $(this).css({"color":"#000","border-bottom":"2px solid #000"})
        $(this).siblings().css({"color":"#767676","border":"none"})
     });

     $('.tabs').find('li').eq(0).click(function(){
        $('html').animate({scrollTop : 1510}, 400);
     });

     $('.tabs').find('li').eq(1).click(function(){
        $('html').animate({scrollTop : 10010}, 400);
     });

     $('.tabs').find('li').eq(2).click(function(){
        $('html').animate({scrollTop : 12710}, 400);
     });
     //북 이전버튼
     $('.button_prev').click(function(){
        $('.book_card_contents_slide li:last').prependTo('.book_card_contents_slide');
        $('.book_card_contents_slide').css('margin-left',-417);
        $('.book_card_contents_slide').stop().animate({marginLeft:0},400)
    });
    //북 다음버튼
    $('.button_next').click(function(){
        $('.book_card_contents_slide').stop().animate({marginLeft:-417},400, function(){
            $('.book_card_contents_slide li:first').appendTo('.book_card_contents_slide');
            $('.book_card_contents_slide').css({marginLeft:0});
        });
    });
    //북 호버할때 버튼보이기
    $('.book_card_contents').hover(function(){
        $('.button_prev').stop().fadeIn('fast');
        $('.button_next').stop().fadeIn('fast');
    },function(){
        $('.button_prev').stop().fadeOut('fast');
        $('.button_next').stop().fadeOut('fast');
    });
    //북카드 호버할때 버튼보이기
    $('.book_card > button').hover(function(){
        $('.button_prev').stop().fadeIn('fast');
        $('.button_next').stop().fadeIn('fast');
    },function(){
        $('.button_prev').stop().fadeOut('fast');
        $('.button_next').stop().fadeOut('fast');
    });
    //호버할때 버튼보이기
    $('.leftrow').hover(function(){
        $(this).find('.wha').stop().fadeIn('fast')
    },function(){
        $(this).find('.wha').stop().fadeOut('fast')
    });

    $('.rightrow').hover(function(){
        $(this).find('.wha').stop().fadeIn('fast')
    },function(){
        $(this).find('.wha').stop().fadeOut('fast')
    });
    //책 button 클릭할때 넘어가기
    var c = 0;
    $('.wha:first').click(function(){
        c--
        if(c >= 0){
            $('.imgs > ul').animate({left:"+=500px"},function(){
                if(c == 0){
                    $('.imgs').css({"opacity":"0"});
                    $('.book').css({"display":"block"});
                }
            });
            
        }else{c=0;}


    });
    //책 button 클릭할때 이전으로 넘어가기
    $('.wha:last').click(function(){
        c++
        if(c < 16){$('.imgs > ul').animate({left:"-=500px"})}else{c=15};
        $('.imgs').css({"opacity":"1"});
        $('.book').css({"display":"none"});
    });

    
    //주문
    var q = $('.count > input').val();

    $('.count > button:first').find('span').click(function(){
        q--
        if(q == 0){
            alert("상품은 1개부터 시작")
            q = 1;
        }
        $('.count > input').attr("value",$('.count > input').val(q))
        
    });

    $('.count > button:last').find('span').click(function(){
        q++
        $('.count > input').attr("value",$('.count > input').val(q))
    });

    $('.count > button').find('span').click(function(){
        $('.buyas > p').html(12600*$('.count > input').val())
        console.log($('.count > input').val());
        console.log(q);
        console.log($('.count > input').val(q));
    });


    //펼치기 눌렀을때
    $('.auto_overflow').find('p').click(function(){

        var s = $(this).parents('.round_gray_box').index()-1;
        if($('.info_box > p').eq(s).height() == 69){
            $('.info_box > p').eq(s).css({"height":"auto"});
            $(this).find('span').css({"transform":"rotate(180deg)"})
        }else{
            $('.info_box > p').eq(s).css({"height":"69px"});
            $(this).find('span').css({"transform":"rotate(0deg)"})
        }
    });


//펼치기 눌렀을때
    $('.button_book').find('p').click(function(){

        var t = $(this).parents('.book_list').index()-5;
        if($('.book_list_text').eq(t).height() == 174){
            $('.book_list_text').eq(t).css({"height":"auto"});
            $(this).find('span').css({"transform":"rotate(180deg)"})
        }else{
            $('.book_list_text').eq(t).css({"height":"174px"});
            $(this).find('span').css({"transform":"rotate(0deg)"})
        }
    });

//펼치기 눌렀을때
    $('.comment_footer_text').click(function(){
        var w = $(this).parents('.comment_item').index()-1;
        if($('.comment_contents').eq(w).height() == 60){
            $('.comment_contents').eq(w).css({"height":"auto","-webkit-box-orient":"horizontal"});
            $(this).find('span').css({"transform":"rotate(180deg)"})
        }else{
            $('.comment_contents').eq(w).css({"height":"60px","-webkit-box-orient":"vertical"});
            $(this).find('span').css({"transform":"rotate(0deg)"})
        }
    });
});
