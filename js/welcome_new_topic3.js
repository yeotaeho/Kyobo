
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"시간",size:20},
        headers:{Authorization: "KakaoAK 949ee6b57bb01a84d18253d981f60294"}
      })
        .done(function( msg ) {

            for (g=0; g < 9; g++) {

              $('.wel_img2-3 > li').eq(g).find('.wel_text').append('<h5>'+msg.documents[g].title+'</h5>')
              $('.wel_img2-3 > li').eq(g).find('a').append('<img src="'+msg.documents[g].thumbnail+'">')
              $('.wel_img2-3 > li').eq(g).find('.wel_text').append('<span>'+msg.documents[g].authors+'</span>');
              $('.wel_img2-3 > li').eq(g).find('.wel_text').append('<h6>'+msg.documents[g].price+"원"+'</h6>');
            }
        
            //sub_best_img

            for (g=0; g < 5; g++) {
              $('.book_best_content_box:first > li').eq(g).find('img').attr("src",msg.documents[g].thumbnail);
              $('.book_best_content_box:first > li').eq(g).find('span:first').text(eval(g+1));
              $('.book_best_content_box:first > li').eq(g).find('p:first').text(msg.documents[g].title);
              $('.book_best_content_box:first > li').eq(g).find('span:last').text(msg.documents[g].authors);
              $('.book_best_content_box:first > li').eq(g).find('p:last').text(msg.documents[g].price+"원");
            }

            //sub_book_intro

            for(a=0; a <= $('.gray_box_book_img_box > li').length; a++){
              var str=msg.documents[a].title;
              var str2=str.substring(0,16);

              $('.gray_box_book_img_box').find('li').eq(a).prepend('<img src="'+msg.documents[a].thumbnail+'">');
              $('.gray_box_book_img_box > li').find('.info_text').eq(a).prepend(str2);
            }
        });
