
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"음악",size:20},
        headers:{Authorization: "KakaoAK 949ee6b57bb01a84d18253d981f60294"}
      })
        .done(function( msg ) {

            for (g=0; g < 9; g++) {

              $('.wel_img2-5 > li').eq(g).find('.wel_text').append('<h5>'+msg.documents[g].title+'</h5>')
              $('.wel_img2-5 > li').eq(g).find('a').append('<img src="'+msg.documents[g].thumbnail+'">')
              $('.wel_img2-5 > li').eq(g).find('.wel_text').append('<span>'+msg.documents[g].authors+'</span>');
              $('.wel_img2-5 > li').eq(g).find('.wel_text').append('<h6>'+msg.documents[g].price+"원"+'</h6>');
            }
        
        });
