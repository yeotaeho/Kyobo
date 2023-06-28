
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"관계",size:10},
        headers:{Authorization: "KakaoAK 949ee6b57bb01a84d18253d981f60294"}
      })
        .done(function( msg ) {

          $('.title4:last > .title_list3').find('li').eq(1).click(function(){
            //외국도서을 클릭했을때
            for (g=0; g < msg.documents.length; g++) {
              $('.contents_inner3_imgbox:last > li').eq(g).find('.contents_inner3_img').html('<img src="'+msg.documents[g].thumbnail+'">');
              $('.contents_inner3_imgbox:last > li').eq(g).find('.sew').html(msg.documents[g].title);
              $('.contents_inner3_imgbox:last > li').eq(g).find('.sssa').html(msg.documents[g].authors);
            }

          });


          //sub_pick_img
          $('.pick_menu_title').find('li').click(function(){
            $(this).css({"background-color":"#595959","color":"#fff"})
            $(this).siblings().css({"background-color":"#f7f7f7","color":"#595959"})
          });

          for (f=0; f <= $('.pick_img').length; f++){
            $('.pick_img_box').find('.pick_img').eq(f).append('<img src="'+msg.documents[f].thumbnail+'">')
          }
        
          $('.pick_menu_title').find('li').eq(0).click(function(){
            for(f=0; f <= $('.pick_img').length; f++) {
              $('.pick_img_box').find('.pick_img').eq(f).html('<img src="'+msg.documents[f].thumbnail+'">')
            }
          });

        });
