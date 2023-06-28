$(function() {
	$.ajax({
	  url:"./json/main.json",
	  dataType:"json",
	  success : function(data){

		if(data.length>0){
		  for(var i in data){

			$('#main_menu').find('li').eq(i).html(data[i].main_menu);
			$('#main_text').append('<p class="ss">'+data[i].main_text+'</p>')
			$('#main_img').append('<a href="#">'+'<img src="'+data[i].main_img+'" class="tlqk">'+'</a>');
			$('.book_self').find('.book_self_imgbox').append('<a href="#">'+'<img src="'+data[i].book_img+'">'+'</a>')
			$('.right_area_sell_img > li').eq(i).find('a').append('<img src="'+data[i].sell_img+'">');
			$('.wel_img:last > li').eq(i).find('a').append('<img src="'+data[i].kyobobook_img+'">');
		   }

		  $('.textbox').find('span').text(data[0].banner_span)		 
		  $('.textbox').find('p').text(data[0].banner_p)
		  $('.textbox').find('col').text(data[0].banner_col) 	
		  $('#main_menu').find('li:last').append('<img src="'+data[0].main_button+'">')

		  for(q=0; q < 20; q++){
			$('.th').append('<li><a href="#">'+'<img src="'+data[q].book_img+'">'+'</a></li>')
		  }
		
		  
		
		  for (w=0; w < 9; w++) {

			$('.wel_img > li').eq(w).find('a').append("<img src='"+data[w].best_book+"'>")
		}

		
		//오늘의 선택 ajax from api_ajsep.js,
		//오늘의 선택 ajax from welcome_today_book.js
		
		//오늘의 선택 다음버튼클릭
		var e=0;

		$('.ne').click(function(){
			
		  e++;

		   $('.book_self_imgbox > a').eq(e).fadeIn();
		   $('.book_self_imgbox > a').eq(e-1).fadeOut();
		   $('.text_box').find('h3').eq(e).fadeIn();
		   $('.text_box').find('h3').eq(e-1).fadeOut();
		   $('.text_box').find('span').eq(e).fadeIn();
		   $('.text_box').find('span').eq(e-1).fadeOut();
		   $('.text_box').find('h6').eq(e).fadeIn();
		   $('.text_box').find('h6').eq(e-1).fadeOut();
		   $('.text_box').find('h5').eq(e).fadeIn();
		   $('.text_box').find('h5').eq(e-1).fadeOut();
		   $('.text_box').find('p').eq(e).fadeIn();
		   $('.text_box').find('p').eq(e-1).fadeOut();
		   $('.th').animate({left:'-=162px'});
		   if(e >= 20){
			e=0;

			$('.book_self_imgbox > a').eq(e).fadeIn();
			$('.book_self_imgbox > a').eq(20).hide();
			$('.text_box').find('h3').eq(e).fadeIn();
			$('.text_box').find('h3').eq(20).hide();
			$('.text_box').find('span').eq(e).fadeIn();
			$('.text_box').find('span').eq(20).hide();
			$('.text_box').find('h6').eq(e).fadeIn();
			$('.text_box').find('h6').eq(20).hide();
			$('.text_box').find('h5').eq(e).fadeIn();
			$('.text_box').find('h5').eq(20).hide();
			$('.text_box').find('p').eq(e).fadeIn();
			$('.text_box').find('p').eq(20).hide();
			$('.th').animate({left:-162});
		   }
		   if(e==0) {
			$('.title_list').find('li').eq(0).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(0).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==4) {
			$('.title_list').find('li').eq(1).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(1).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==7) {
			$('.title_list').find('li').eq(2).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(2).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==11) {
			$('.title_list').find('li').eq(3).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(3).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==13) {
			$('.title_list').find('li').eq(4).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(4).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==15) {
			$('.title_list').find('li').eq(5).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(5).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==16) {
			$('.title_list').find('li').eq(6).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(6).siblings().css({"color":"#000","font-weight":"lighter"})
		   }
		});

		//오늘의 선택이전버튼클릭
		$('.pr').click(function(){
			if(e >= 1){
				e--;
  
			 $('.book_self_imgbox > a').eq(e).fadeIn();
			 $('.book_self_imgbox > a').eq(e+1).fadeOut();
			 $('.text_box').find('h3').eq(e).fadeIn();
		   $('.text_box').find('h3').eq(e+1).fadeOut();
		   $('.text_box').find('span').eq(e).fadeIn();
		   $('.text_box').find('span').eq(e+1).fadeOut();
		   $('.text_box').find('h6').eq(e).fadeIn();
		   $('.text_box').find('h6').eq(e+1).fadeOut();
		   $('.text_box').find('h5').eq(e).fadeIn();
		   $('.text_box').find('h5').eq(e+1).fadeOut();
		   $('.text_box').find('p').eq(e).fadeIn();
		   $('.text_box').find('p').eq(e+1).fadeOut();
		   $('.th').animate({left:'+=162px'})

		   if(e==0) {
			$('.title_list').find('li').eq(0).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(0).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==4) {
			$('.title_list').find('li').eq(1).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(1).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==7) {
			$('.title_list').find('li').eq(2).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(2).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==11) {
			$('.title_list').find('li').eq(3).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(3).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==13) {
			$('.title_list').find('li').eq(4).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(4).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==15) {
			$('.title_list').find('li').eq(5).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(5).siblings().css({"color":"#000","font-weight":"lighter"})
		   }

		   if(e==16) {
			$('.title_list').find('li').eq(6).css({"color":"#474c98","font-weight":"bold"})
			$('.title_list').find('li').eq(6).siblings().css({"color":"#000","font-weight":"lighter"})
		   }
			}
			
		  });
		  //오늘의 선택 전체클릭
		  $('.title_list').find('li').eq(0).click(function(){
			e = 0;
			$('.book_self_imgbox > a').eq(e).fadeIn();
		   $('.book_self_imgbox > a').eq(e).siblings().fadeOut();
		   $('.text_box').find('h3').eq(e).fadeIn();
		   $('.text_box').find('h3').eq(e).siblings().fadeOut();
		   $('.text_box').find('span').eq(e).fadeIn();
		   $('.text_box').find('span').eq(e-4).fadeOut();
		   $('.text_box').find('h6').eq(e).fadeIn();
		   $('.text_box').find('h6').eq(e-4).fadeOut();
		   $('.text_box').find('h5').eq(e).fadeIn();
		   $('.text_box').find('h5').eq(e-4).fadeOut();
		   $('.text_box').find('p').eq(e).fadeIn();
		   $('.text_box').find('p').eq(e-4).fadeOut();
		   $('.th').animate({left:-162})
		  });
		  //오늘의 국내도서 전체클릭
		  $('.title_list').find('li').eq(1).click(function(){
			e = 4;
			$('.book_self_imgbox > a').eq(e).fadeIn();
		   $('.book_self_imgbox > a').eq(e).siblings().fadeOut();
		   $('.text_box').find('h3').eq(e).fadeIn();
		   $('.text_box').find('h3').eq(e).siblings().fadeOut();
		   $('.text_box').find('span').eq(e).fadeIn();
		   $('.text_box').find('span').eq(e-4).fadeOut();
		   $('.text_box').find('h6').eq(e).fadeIn();
		   $('.text_box').find('h6').eq(e-4).fadeOut();
		   $('.text_box').find('h5').eq(e).fadeIn();
		   $('.text_box').find('h5').eq(e-4).fadeOut();
		   $('.text_box').find('p').eq(e).fadeIn();
		   $('.text_box').find('p').eq(e-4).fadeOut();
		   $('.th').animate({left:-810})
		  });
		  //오늘의 외국도서 전체클릭
		  $('.title_list').find('li').eq(2).click(function(){
			e = 7;
			$('.book_self_imgbox > a').eq(e).fadeIn();
		   $('.book_self_imgbox > a').eq(e).siblings().fadeOut();
		   $('.text_box').find('h3').eq(e).fadeIn();
		   $('.text_box').find('h3').eq(e).siblings().fadeOut();
		   $('.text_box').find('span').eq(e).fadeIn();
		   $('.text_box').find('span').eq(e-4).fadeOut();
		   $('.text_box').find('h6').eq(e).fadeIn();
		   $('.text_box').find('h6').eq(e-4).fadeOut();
		   $('.text_box').find('h5').eq(e).fadeIn();
		   $('.text_box').find('h5').eq(e-4).fadeOut();
		   $('.text_box').find('p').eq(e).fadeIn();
		   $('.text_box').find('p').eq(e-4).fadeOut();
		   $('.th').animate({left:-1296})
		  });
		  //오늘의 eBook 전체클릭
		  $('.title_list').find('li').eq(3).click(function(){
			e = 11;
			$('.book_self_imgbox > a').eq(e).fadeIn();
		   $('.book_self_imgbox > a').eq(e).siblings().fadeOut();
		   $('.text_box').find('h3').eq(e).fadeIn();
		   $('.text_box').find('h3').eq(e).siblings().fadeOut();
		   $('.text_box').find('span').eq(e).fadeIn();
		   $('.text_box').find('span').eq(e-4).fadeOut();
		   $('.text_box').find('h6').eq(e).fadeIn();
		   $('.text_box').find('h6').eq(e-4).fadeOut();
		   $('.text_box').find('h5').eq(e).fadeIn();
		   $('.text_box').find('h5').eq(e-4).fadeOut();
		   $('.text_box').find('p').eq(e).fadeIn();
		   $('.text_box').find('p').eq(e-4).fadeOut();
		   $('.th').animate({left:-1944})
		  });
		  //오늘의 sam 전체클릭
		  $('.title_list').find('li').eq(4).click(function(){
			e = 13;
			$('.book_self_imgbox > a').eq(e).fadeIn();
		   $('.book_self_imgbox > a').eq(e).siblings().fadeOut();
		   $('.text_box').find('h3').eq(e).fadeIn();
		   $('.text_box').find('h3').eq(e).siblings().fadeOut();
		   $('.text_box').find('span').eq(e).fadeIn();
		   $('.text_box').find('span').eq(e-4).fadeOut();
		   $('.text_box').find('h6').eq(e).fadeIn();
		   $('.text_box').find('h6').eq(e-4).fadeOut();
		   $('.text_box').find('h5').eq(e).fadeIn();
		   $('.text_box').find('h5').eq(e-4).fadeOut();
		   $('.text_box').find('p').eq(e).fadeIn();
		   $('.text_box').find('p').eq(e-4).fadeOut();
		   $('.th').animate({left:-2268})
		  });
		  //오늘의 핫트랙스 전체클릭
		  $('.title_list').find('li').eq(5).click(function(){
			e = 15;
			$('.book_self_imgbox > a').eq(e).fadeIn();
		   $('.book_self_imgbox > a').eq(e).siblings().fadeOut();
		   $('.text_box').find('h3').eq(e).fadeIn();
		   $('.text_box').find('h3').eq(e).siblings().fadeOut();
		   $('.text_box').find('span').eq(e).fadeIn();
		   $('.text_box').find('span').eq(e-4).fadeOut();
		   $('.text_box').find('h6').eq(e).fadeIn();
		   $('.text_box').find('h6').eq(e-4).fadeOut();
		   $('.text_box').find('h5').eq(e).fadeIn();
		   $('.text_box').find('h5').eq(e-4).fadeOut();
		   $('.text_box').find('p').eq(e).fadeIn();
		   $('.text_box').find('p').eq(e-4).fadeOut();
		   $('.th').animate({left:-2592})
		  });
		  //교보ONLY
		  $('.title_list').find('li').eq(6).click(function(){
			e = 16;
			$('.book_self_imgbox > a').eq(e).fadeIn();
		   $('.book_self_imgbox > a').eq(e).siblings().fadeOut();
		   $('.text_box').find('h3').eq(e).fadeIn();
		   $('.text_box').find('h3').eq(e).siblings().fadeOut();
		   $('.text_box').find('span').eq(e).fadeIn();
		   $('.text_box').find('span').eq(e-4).fadeOut();
		   $('.text_box').find('h6').eq(e).fadeIn();
		   $('.text_box').find('h6').eq(e-4).fadeOut();
		   $('.text_box').find('h5').eq(e).fadeIn();
		   $('.text_box').find('h5').eq(e-4).fadeOut();
		   $('.text_box').find('p').eq(e).fadeIn();
		   $('.text_box').find('p').eq(e-4).fadeOut();
		   $('.th').animate({left:-2754})
		  });
		  //오늘의 선택의 목록들 클릭
		  $('.title_list').find('li').click(function(){
			$(this).css({"color":"#474c98","font-weight":"bold"})
			$(this).siblings().css({"color":"#000","font-weight":"lighter"})
		  });

		  //급상승 도서
		  var f = 0;
		  //급상승 도서 이전버튼을 클릭
		  $('.prer').click(function(){
			f--
			if(f >= 0){$('.wel_img').animate({left:'+=309px'}) }else{f=0;}
		  });
		  //급상승 도서 다음버튼을 클릭
		  $('.nes').click(function(){
			f++
			if(f < 6){$('.wel_img').animate({left:'-=309px'});}else{f=5;}
		  });

		  //화제의 신상 ajax from welcome_new_topic.js
		  //화제의 신상 ajax from welcome_new_topic2.js
		  //화제의 신상 ajax from welcome_new_topic3.js
		  //화제의 신상 ajax from welcome_new_topic4.js
		  //화제의 신상 ajax from welcome_new_topic5.js
		  //화제의 신상 ajax from welcome_new_topic6.js
		  //화제의 신상 ajax from welcome_new_topic7.js
		  //화제의 신상 이전 버튼클릭
		  $('.prer2').click(function(){
			f--
			if(f >= 0){
			$('.wel_img2').animate({left:'+=309px'});
			$('.wel_img2-2').animate({left:'+=309px'});
			$('.wel_img2-3').animate({left:'+=309px'});
			$('.wel_img2-4').animate({left:'+=309px'});
			$('.wel_img2-5').animate({left:'+=309px'});
			$('.wel_img2-6').animate({left:'+=309px'});
			$('.wel_img2-7').animate({left:'+=309px'});}else{f=0;}
		  });
		  //화제의 신상 다음 버튼클릭
		  $('.nes2').click(function(){
			f++
			if(f < 6){
			$('.wel_img2').animate({left:'-=309px'});
			$('.wel_img2-2').animate({left:'-=309px'});
			$('.wel_img2-3').animate({left:'-=309px'});
			$('.wel_img2-4').animate({left:'-=309px'});
			$('.wel_img2-5').animate({left:'-=309px'});
			$('.wel_img2-6').animate({left:'-=309px'});
			$('.wel_img2-7').animate({left:'-=309px'});}else{f=5;}
		  });
		  //화제의 신상 목록들 클릭 //전체
		  $('.title_list2').find('li').eq(0).click(function(){
			$('.welcome_main_content_imgbox2').find('ul').eq(0).fadeIn();
			$('.welcome_main_content_imgbox2').find('ul').eq(0).siblings().fadeOut();
			$(this).css({"color":"#474c98","font-weight":"bold"})
			$(this).siblings().css({"color":"#000","font-weight":"lighter"})
		  });
		  //국내도서
		  $('.title_list2').find('li').eq(1).click(function(){
			$('.welcome_main_content_imgbox2').find('ul').eq(1).fadeIn('slow');
			$('.welcome_main_content_imgbox2').find('ul').eq(1).siblings().fadeOut('fast');
			$(this).css({"color":"#474c98","font-weight":"bold"})
			$(this).siblings().css({"color":"#000","font-weight":"lighter"})
		  });
		  //외국도서
		  $('.title_list2').find('li').eq(2).click(function(){
			$('.welcome_main_content_imgbox2').find('ul').eq(2).fadeIn('slow');
			$('.welcome_main_content_imgbox2').find('ul').eq(2).siblings().fadeOut('fast');
			$(this).css({"color":"#474c98","font-weight":"bold"})
			$(this).siblings().css({"color":"#000","font-weight":"lighter"})
		  });
		  //eBook
		  $('.title_list2').find('li').eq(3).click(function(){
			$('.welcome_main_content_imgbox2').find('ul').eq(3).fadeIn('slow');
			$('.welcome_main_content_imgbox2').find('ul').eq(3).siblings().fadeOut('fast');
			$(this).css({"color":"#474c98","font-weight":"bold"})
			$(this).siblings().css({"color":"#000","font-weight":"lighter"})
		  });
		  //sam
		  $('.title_list2').find('li').eq(4).click(function(){
			$('.welcome_main_content_imgbox2').find('ul').eq(4).fadeIn('slow');
			$('.welcome_main_content_imgbox2').find('ul').eq(4).siblings().fadeOut('fast');
			$(this).css({"color":"#474c98","font-weight":"bold"})
			$(this).siblings().css({"color":"#000","font-weight":"lighter"})
		  });
		  //핫트랙스
		  $('.title_list2').find('li').eq(5).click(function(){
			$('.welcome_main_content_imgbox2').find('ul').eq(5).fadeIn('slow');
			$('.welcome_main_content_imgbox2').find('ul').eq(5).siblings().fadeOut('fast');
			$(this).css({"color":"#474c98","font-weight":"bold"})
			$(this).siblings().css({"color":"#000","font-weight":"lighter"})
		  });
		  //교보ONLY
		  $('.title_list2').find('li').eq(6).click(function(){
			$('.welcome_main_content_imgbox2').find('ul').eq(6).fadeIn('slow');
			$('.welcome_main_content_imgbox2').find('ul').eq(6).siblings().fadeOut('fast');
			$(this).css({"color":"#474c98","font-weight":"bold"})
			$(this).siblings().css({"color":"#000","font-weight":"lighter"})
		  });
		  //히트 이전버튼 클릭
		  var r =0;
		  $('.ppp').click(function(){
			r--
			if(r >= 0){$('.right_area_sell_img').animate({left:'+=309px'})}else{r=0;}
			
		  });
		  //히트 다음버튼 클릭
		  $('.nnn').click(function(){
			r++
			if(r < 10){$('.right_area_sell_img').animate({left:'-=309px'})}else{r=9;}
			
		  });

		  //캐스팅 다음 버튼클릭
		  var n = 0;
		  $('.swiper_container > .right').click(function(){
			n++;
			if(n == 1){
				$('#blur_img_box').css({"background":"url(img/background_img2.jpg)","background-size":"cover","background-position":"center"})
			}

			if(n == 2){
				$('#blur_img_box').css({"background":"url(img/background_img3.jpg)","background-size":"cover","background-position":"center"})
			}
			if(n < 3){
				$('.casting_img > a').eq(n).fadeIn(200);
			    $('.casting_img > a').eq(n-1).fadeOut(200);
				$('.swiper_container_text').find('h6').eq(n).fadeIn(300);
				$('.swiper_container_text').find('h6').eq(n-1).fadeOut(300);
				$('.prod_area').find('a').eq(n).fadeIn(200);
				$('.prod_area').find('a').eq(n-1).fadeOut(200);
				$('.casting_textbox').find('p').eq(n).fadeIn(200);
				$('.casting_textbox').find('p').eq(n-1).fadeOut(200);
				$('.casting_textbox').find('span').eq(n).fadeIn(200);
				$('.casting_textbox').find('span').eq(n-1).fadeOut(200);
			}else{n=2;}

		  });

		  //캐스팅 이전버튼클릭
		  $('.swiper_container > .left').click(function(){
			n--;
			if(n == 0){
				$('#blur_img_box').css({"background":"url(img/background_img.jpg)","background-size":"cover","background-position":"center"})
			}

			if(n == 1){
				$('#blur_img_box').css({"background":"url(img/background_img2.jpg)","background-size":"cover","background-position":"center"})
			}

			if(n == 2){
				$('#blur_img_box').css({"background":"url(img/background_img3.jpg)","background-size":"cover","background-position":"center"})
			}
			if(n >= 0){
				$('.casting_img > a').eq(n).fadeIn(200);
			    $('.casting_img > a').eq(n+1).fadeOut(200);
				$('.swiper_container_text').find('h6').eq(n).fadeIn(300);
				$('.swiper_container_text').find('h6').eq(n+1).fadeOut(300);
				$('.prod_area').find('a').eq(n).fadeIn(200);
				$('.prod_area').find('a').eq(n+1).fadeOut(200);
				$('.casting_textbox').find('p').eq(n).fadeIn(200);
				$('.casting_textbox').find('p').eq(n+1).fadeOut(200);
				$('.casting_textbox').find('span').eq(n).fadeIn(200);
				$('.casting_textbox').find('span').eq(n+1).fadeOut(200);
			}else{n=0;}
		  });
		  
		  //캐스팅 포스트 리스트
		  var m =0;
		  //이전버튼을 클릭
		  $('.leftt').click(function(){
			m--;
			if(m >= 0){
				$('.fluid_swiperaa').animate({left:'+=308px'})
			}else{m=0;}
		  });
		  //다음버튼을 클릭
		  $('.rightt').click(function(){
			m++;
			if(m < 4){
				$('.fluid_swiperaa').animate({left:'-=308px'})
			}else{m=3;}
		  });


		
	
		}

		
	 
	  }
	  
	});
	
  });
