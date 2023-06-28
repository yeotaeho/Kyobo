
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"예술",size:10},
        headers:{Authorization: "KakaoAK 949ee6b57bb01a84d18253d981f60294"}
      })
        .done(function( msg ) {

          $('.title_list3').find('li').eq(5).click(function(){
            //핫트랙스을 클릭했을때
            for (g=0; g < msg.documents.length; g++) {
              $('.contents_inner3_imgbox > li').eq(g).find('.contents_inner3_img').html('<img src="'+msg.documents[g].thumbnail+'">');
              $('.contents_inner3_imgbox > li').eq(g).find('.sew').html(msg.documents[g].title);
              $('.contents_inner3_imgbox > li').eq(g).find('.sssa').html(msg.documents[g].authors);
            }

          });


        //sub_pick_img

          $('.pick_menu_title').find('li').eq(3).click(function(){
            for(f=0; f <= $('.pick_img').length; f++) {
              $('.pick_img_box').find('.pick_img').eq(f).html('<img src="'+msg.documents[f].thumbnail+'">')
            }
          });


          //sub_best_img
          for (g=0; g < 5; g++) {
            $('.book_best_content_box:last > li').eq(g).find('img').attr("src",msg.documents[g].thumbnail);
            $('.book_best_content_box:last > li').eq(g).find('span:first').text(eval(g+1));
            $('.book_best_content_box:last > li').eq(g).find('p:first').text(msg.documents[g].title);
            $('.book_best_content_box:last > li').eq(g).find('span:last').text(msg.documents[g].authors);
            $('.book_best_content_box:last > li').eq(g).find('p:last').text(msg.documents[g].price+"원");
          }
        });
