
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"왜",size:10 },
        headers:{Authorization: "KakaoAK 949ee6b57bb01a84d18253d981f60294"}
      })
        .done(function( msg ) {
            //베스트 스테디 
            //베스트
            for (g=0; g < msg.documents.length; g++) {
              //기존 초기값
              $('.contents_inner3_imgbox > li').eq(g).find('.contents_inner3_title').prepend('<span class="text">'+eval(g+1)+'</span>');
              $('.contents_inner3_imgbox > li').eq(g).find('.contents_inner3_img').prepend('<img src="'+msg.documents[g].thumbnail+'">');
              $('.contents_inner3_imgbox > li').eq(g).find('.contents_inner3_text').append('<h6 class="sew">'+msg.documents[g].title+'</h6>');
              $('.contents_inner3_imgbox > li').eq(g).find('.contents_inner3_text').append('<p class="sssa">'+msg.documents[g].authors+'</p>');
            }

            $('.title_list3').find('li').eq(0).click(function(){
              //전체을 클릭했을때
              for (g=0; g < msg.documents.length; g++) {
                $('.contents_inner3_imgbox > li').eq(g).find('.contents_inner3_img').html('<img src="'+msg.documents[g].thumbnail+'">');
                $('.contents_inner3_imgbox > li').eq(g).find('.sew').html(msg.documents[g].title);
                $('.contents_inner3_imgbox > li').eq(g).find('.sssa').html(msg.documents[g].authors);
              }
  
            });
            //sub_pick_img
            $('.pick_menu_title').find('li').eq(1).click(function(){
              for(f=0; f <= $('.pick_img').length; f++) {
                $('.pick_img_box').find('.pick_img').eq(f).html('<img src="'+msg.documents[f].thumbnail+'">')
              }
            });
        });
