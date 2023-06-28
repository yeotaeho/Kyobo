$(function() {
	$.ajax({
	  url:"json/header.json",
	  dataType:"json",
	  success : function(data){

		if(data.length>0){
		  for(var i in data){
			//menuimg텍스트
			$('.brand').find('text').eq(i).text(data[i].brand)
			//로그인
			$('.log').find('li').eq(i).text(data[i].log)
			$('#nav > .first_list').find('li').eq(i).prepend(data[i].nav)
			$('#nav > .twice_list').find('li').eq(i).html(data[i].nav2)
			//서비스 전체보기 텍스트
			$('.nav_menu_li').find('li').eq(i).text(data[i].nav_menu_li)
			$('.nav_menu_li2').find('li').eq(i).text(data[i].nav_menu_li2)
			$('.nav_menu_li3').find('li').eq(i).text(data[i].nav_menu_li3)
			$('.nav_menu_li4').find('li').eq(i).text(data[i].nav_menu_li4)
			$('.nav_menu_li5').find('li').eq(i).text(data[i].nav_menu_li5)
			$('.nav_menu_li6').find('li').eq(i).text(data[i].nav_menu_li6)
			$('.nav_menu_li7').find('li').eq(i).text(data[i].nav_menu_li7)
			$('.nav_menu_li8').find('li').eq(i).text(data[i].nav_menu_li8)
			$('.nav_menu_li9').find('li').eq(i).text(data[i].nav_menu_li9)
			$('.nav_menu_li10').find('li').eq(i).text(data[i].nav_menu_li10)
			$('.nav_menu_li11').find('li').eq(i).text(data[i].nav_menu_li11)
			$('.nav_menu_li12').find('li').eq(i).text(data[i].nav_menu_li12)
			$('.nav_menu_li13').find('li').eq(i).text(data[i].nav_menu_li13)
			$('.nav_menu_li14').find('li').eq(i).text(data[i].nav_menu_li14)
			$('.nav_menu_li15').find('li').eq(i).text(data[i].nav_menu_li15)
			$('.nav_menu_li16').find('li').eq(i).text(data[i].nav_menu_li16)
			$('.nav_menu_li18').find('li').eq(i).text(data[i].nav_menu_li18)
			$('.nav_menu_li19').find('li').eq(i).text(data[i].nav_menu_li19)
			$('.nav_menu_li20').find('li').eq(i).text(data[i].nav_menu_li20)


		  }

		  //광고이미지 제거
		  $('#top_img > a').find('img:last').click(function(){
			$('#top_img').hide();
		});

		  //브랜드 더보기
		  $(document).ready(function(){
            $('.event_list').find('li:last').click(function(){
                $('.sd > a').find('img').toggleClass('toggle_img')
                $('.brand_list').fadeToggle(300);
            });

		  //매뉴이미지	
            $('.first_list > a:first').click(function(e){
                e.preventDefault();
                $('.nav_menu').fadeToggle(300);
            });

			//서비스 전체보기 클릭했을때
            $('.nav_menu1 > li:last').click(function(){
                $('.nav_menu_1').fadeIn(200);
                $('.tle, .big_menu_box').hide();
                $(this).css({"color":"#000","background-color":"#fff"})
                $('.nav_menu1 > li:first').css({"color":"#767676","background":"#eee"})

            });
			//카테고리 전체보기
            $('.nav_menu1 > li:first').click(function(){
                $('.tle, .big_menu_box').fadeIn(200);
                $('.nav_menu_1').hide();
                $(this).css({"color":"#000","background-color":"#fff"})
                $('.nav_menu1 > li:last').css({"color":"#767676","background":"#eee"})
            });

        });

		}
	 
	  }
	  
	});
	
  });
