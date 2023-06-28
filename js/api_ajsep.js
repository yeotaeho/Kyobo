 
 $(document).ready(function(){

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"자바스크립트",size:20},
    headers:{Authorization: "KakaoAK 949ee6b57bb01a84d18253d981f60294"}
  })
    .done(function( msg ) {

      //오늘의 선택 title데이터
      for(t=0; t < 20; t++){
        $('.th > li').eq(t).append('<text>'+msg.documents[t].title+'</text>')
      }

    });

 });
  
