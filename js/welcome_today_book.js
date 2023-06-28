
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"자바스크립트",size:20},
    headers:{Authorization: "KakaoAK 949ee6b57bb01a84d18253d981f60294"}
  })
    .done(function( msg ) {

        for (n=0; n <= msg.documents.length; n++) {
          var str=msg.documents[n].contents;
          var str2=str.substring(0,100);
    
          //오늘의 선택 텍스트box
          $('.text_box').append('<h3>'+msg.documents[n].title+'</h3>');
          $('.text_box').append('<span>'+msg.documents[n].authors+'</span>');
          $('.text_box').append('<h6>'+msg.documents[n].price+"원"+'</h6>');
          $('.text_box').append('<h5>'+msg.documents[n].publisher+'</h5>');
          $(".text_box").append('<p>'+str2+'</p>');

        }
      

    });
