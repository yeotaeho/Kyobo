
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"html",size:10},
        headers:{Authorization: "KakaoAK 949ee6b57bb01a84d18253d981f60294"}
      })
        .done(function( msg ) {

          $('.title4 > h3').find('span').click(function(){
            //스테디을 클릭했을때
            $('.contents_inner3').eq(0).fadeOut();
            $('.contents_inner3').eq(1).fadeIn();
            $('.contents_inner3:last > .title4').find('span').eq(0).css({"color":"#000"});
            $('.contents_inner3:last > .title4').find('text').css({"color":"#eaeaea"});
            //스테디 초기값
            for (g=0; g < msg.documents.length; g++) {
              $('.contents_inner3_imgbox:last > li').eq(g).find('.contents_inner3_title').empty().prepend('<span class="text">'+eval(g+1)+'</span>');
              $('.contents_inner3_imgbox:last > li').eq(g).find('.contents_inner3_img').empty().prepend('<img src="'+msg.documents[g].thumbnail+'">');
              $('.contents_inner3_imgbox:last > li').eq(g).find('.contents_inner3_text').empty().append('<h6 class="sew">'+msg.documents[g].title+'</h6>');
              $('.contents_inner3_imgbox:last > li').eq(g).find('.contents_inner3_text').append('<p class="sssa">'+msg.documents[g].authors+'</p>');
            }
            //국내도서을 클릭했을때
            $('.title4:last > .title_list3').find('li').eq(0).click(function(){
              for (g=0; g < msg.documents.length; g++) {
                $('.contents_inner3_imgbox:last > li').eq(g).find('.contents_inner3_img').html('<img src="'+msg.documents[g].thumbnail+'">');
                $('.contents_inner3_imgbox:last > li').eq(g).find('.sew').html(msg.documents[g].title);
                $('.contents_inner3_imgbox:last > li').eq(g).find('.sssa').html(msg.documents[g].authors);
              }
  
            });

          });
          
          $('.title4 > h3').find('text').click(function(){

            $('.title4 > h3').find('span').css({"color":"#eaeaea"});
            $(this).css({"color":"#000"});
            $('.contents_inner3').eq(0).fadeIn();
            $('.contents_inner3').eq(1).fadeOut();
          });
        
          $('.title_list3').find('li').click(function(){
            $(this).css({"color":"#474c98","font-weight":"bold"})
            $(this).siblings().css({"color":"#000","font-weight":"lighter"})
          });

        });
