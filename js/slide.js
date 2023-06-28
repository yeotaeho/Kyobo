  $(document).ready(function(){

//메인텍스트,메인슬라이더
		var j=0;
		function text(){
			
			j++;
			if (j > $('#main_text > p:last').index()){
				j=0;
			}

		   $('#main_text > p').eq(j).fadeIn(1500);
		   $('#main_text > p').eq(j-1).fadeOut(1000);

		   $('#main_img > a').eq(j).fadeIn(1500);
		   $('#main_img > a').eq(j-1).fadeOut(1000);

		   if(j==0){
			$('.main_menui1').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui1').siblings().css({"color":"#767676","border":"none"})
		   }
		   if(j==6){
			$('.main_menui2').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui2').siblings().css({"color":"#767676","border":"none"})
		   }
		   if(j==9){
			$('.main_menui3').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui3').siblings().css({"color":"#767676","border":"none"})
		   }
		   if(j==12){
			$('.main_menui4').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui4').siblings().css({"color":"#767676","border":"none"})
		   }
		   if(j==15){
			$('.main_menui5').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui5').siblings().css({"color":"#767676","border":"none"})
		   }
		   if(j==20){
			$('.main_menui6').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui6').siblings().css({"color":"#767676","border":"none"})
		   }
		   if(j==23){
			$('.main_menui7').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui7').siblings().css({"color":"#767676","border":"none"})
		   }
		   if(j==30){
			$('.main_menui8').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui8').siblings().css({"color":"#767676","border":"none"})
		   }

		   $('#banner > p').find('span').html(j+1);

		  }

		  //메인슬라이더 이전 버튼을 누르면생기는 이벤트
		  $('.prev').click(function(){
			j--;
			$('#main_text > p').eq(j).stop().fadeIn(1500);
			$('#main_text > p').eq(j+1).stop().fadeOut(1000);
 
			$('#main_img > a').eq(j).stop().fadeIn(1500);
			$('#main_img > a').eq(j+1).stop().fadeOut(1000);

				if(j < 0){
					j=30;
				}
			if(j==0){
				$('.main_menui1').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui1').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==6){
				$('.main_menui2').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui2').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==9){
				$('.main_menui3').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui3').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==12){
				$('.main_menui4').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui4').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==15){
				$('.main_menui5').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui5').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==20){
				$('.main_menui6').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui6').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==23){
				$('.main_menui7').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui7').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==30){
				$('.main_menui8').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui8').siblings().css({"color":"#767676","border":"none"})
			   }
			   $('#banner > p').find('span').html(j+1);
		  });

		  //메인슬라이더 다음버튼 누를때
		  $('.next').click(function(){
			j++;
			if(j > $('#main_img > a:last').index()){
				j=0;
			}
			$('#main_text > p').eq(j).fadeIn(1500);
			$('#main_text > p').eq(j-1).fadeOut(1000);
 
			$('#main_img > a').eq(j).fadeIn(1500);
			$('#main_img > a').eq(j-1).fadeOut(1000);

			if(j==0){
				$('.main_menui1').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui1').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==6){
				$('.main_menui2').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui2').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==9){
				$('.main_menui3').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui3').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==12){
				$('.main_menui4').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui4').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==15){
				$('.main_menui5').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui5').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==20){
				$('.main_menui6').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui6').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==23){
				$('.main_menui7').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui7').siblings().css({"color":"#767676","border":"none"})
			   }
			   if(j==30){
				$('.main_menui8').css({"color":"#000","border-bottom":" 2px solid #000"});
				$('.main_menui8').siblings().css({"color":"#767676","border":"none"})
			   }
			   $('#banner > p').find('span').html(j+1);
		  });

		  

		  //메인슬라이더의 핫이슈 클릭했을때
		  $('.main_menui1').click(function(){
			j=0;
			$('#main_text > p').eq(j).fadeIn(1500);
			$('#main_text > p').eq(j).siblings().fadeOut(1000);
 
			$('#main_img > a').eq(j).fadeIn(1500);
			$('#main_img > a').eq(j).siblings().fadeOut(1000);
			$('.main_menui1').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui1').siblings().css({"color":"#767676","border":"none"});
			$('#banner > p').find('span').html(j+1);
		  });
		//메인슬라이더의 요즘 이 책 클릭했을때
		  $('.main_menui2').click(function(){
			j=6;
			$('#main_text > p').eq(j).fadeIn(1500);
			$('#main_text > p').eq(j).siblings().fadeOut(1000);
 
			$('#main_img > a').eq(j).fadeIn(1500);
			$('#main_img > a').eq(j).siblings().fadeOut(1000);
			$('.main_menui2').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui2').siblings().css({"color":"#767676","border":"none"});
			$('#banner > p').find('span').html(j+1);
		  });

		  //메인슬라이더의 새로나온책 클릭했을때
		  $('.main_menui3').click(function(){
			j=9;
			$('#main_text > p').eq(j).fadeIn(1500);
			$('#main_text > p').eq(j).siblings().fadeOut(1000);
 
			$('#main_img > a').eq(j).fadeIn(1500);
			$('#main_img > a').eq(j).siblings().fadeOut(1000);
			$('.main_menui3').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui3').siblings().css({"color":"#767676","border":"none"});
			$('#banner > p').find('span').html(j+1);
		  });
		//메인슬라이더의 기획전 클릭했을때
		  $('.main_menui4').click(function(){
			j=12;
			$('#main_text > p').eq(j).fadeIn(1500);
			$('#main_text > p').eq(j).siblings().fadeOut(1000);
 
			$('#main_img > a').eq(j).fadeIn(1500);
			$('#main_img > a').eq(j).siblings().fadeOut(1000);
			$('.main_menui4').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui4').siblings().css({"color":"#767676","border":"none"});
			$('#banner > p').find('span').html(j+1);
		  });

		  //메인슬라이더의 eBook 클릭했을때
		  $('.main_menui5').click(function(){
			j=15;
			$('#main_text > p').eq(j).fadeIn(1500);
			$('#main_text > p').eq(j).siblings().fadeOut(1000);
 
			$('#main_img > a').eq(j).fadeIn(1500);
			$('#main_img > a').eq(j).siblings().fadeOut(1000);
			$('.main_menui5').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui5').siblings().css({"color":"#767676","border":"none"});
			$('#banner > p').find('span').html(j+1);
		  });

		//메인슬라이더의 sam 클릭했을때
		  $('.main_menui6').click(function(){
			j=20;
			$('#main_text > p').eq(j).fadeIn(1500);
			$('#main_text > p').eq(j).siblings().fadeOut(1000);
 
			$('#main_img > a').eq(j).fadeIn(1500);
			$('#main_img > a').eq(j).siblings().fadeOut(1000);
			$('.main_menui6').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui6').siblings().css({"color":"#767676","border":"none"});
			$('#banner > p').find('span').html(j+1);
		  });

		//메인슬라이더의 핫트랙스 클릭했을때
		  $('.main_menui7').click(function(){
			j=23;
			$('#main_text > p').eq(j).fadeIn(1500);
			$('#main_text > p').eq(j).siblings().fadeOut(1000);
 
			$('#main_img > a').eq(j).fadeIn(1500);
			$('#main_img > a').eq(j).siblings().fadeOut(1000);
			$('.main_menui7').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui7').siblings().css({"color":"#767676","border":"none"});
			$('#banner > p').find('span').html(j+1);
		  });
		//메인슬라이더의 톡소다 클릭했을때
		  $('.main_menui8').click(function(){
			j=30;
			$('#main_text > p').eq(j).fadeIn(1500);
			$('#main_text > p').eq(j).siblings().fadeOut(1000);
 
			$('#main_img > a').eq(j).fadeIn(1500);
			$('#main_img > a').eq(j).siblings().fadeOut(1000);
			$('.main_menui8').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui8').siblings().css({"color":"#767676","border":"none"});
			$('#banner > p').find('span').html(j+1);

		  });

		  if(j < 6){
			$('.main_menui1').css({"color":"#000","border-bottom":" 2px solid #000"});
			$('.main_menui1').siblings().css({"color":"#767676","border":"none"});
		}

	//이벤트
	//광고 슬라이드 컨트롤
		  var o = 1
		  //슬라이드 함수 3초마다 실행
		  function slide(){
			$('.slide').animate({left:-1200}, function(){
				$('.slide li:first').appendTo('.slide');
				$('.slide').css({left:0});
			})
			o++
			if(o == 8){
				o=1;
			}
			$('.control_box').find('p').text('0'+o+' - 07')
		}
		//이전버튼 클릭
		$('.dl').click(function(){
			o--
			if(o == 0){
				o=7;
			}
			$('.slide li:last').prependTo('.slide');
			$('.slide').css('margin-left',-1200);
			$('.slide').stop().animate({marginLeft:0},800);
			$('.control_box').find('p').text('0'+o+' - 07')
		});

		//다음버튼 클릭
		$('.tl').click(function(){
			o++
			$('.slide').stop().animate({marginLeft:-1200}, function(){
				$('.slide li:first').appendTo('.slide');
				$('.slide').css({marginLeft:0})
			});
			$('.control_box').find('p').text('0'+o+' - 07')
		});
		setInterval(slide, 3700);
		setInterval(text,8000)
  });
