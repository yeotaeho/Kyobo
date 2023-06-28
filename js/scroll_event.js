$(document).ready(function(){
		//스크롤
		$(window).scroll(function(){ 
			//윙배너
			if($(this).scrollTop() > 850){
				$('#fly_menu').css({"position":"fixed","top":"140px"})
			}else{
				$('#fly_menu').css({"position":"absolute","top":"990px"})
			}
			//serch_bar
			if($(this).scrollTop() > 205){
				$('#serch_bar').css({"position":"fixed","top":"0px","border-bottom":"1px solid #c0c0c0","z-index":"100"})
			}else{
				$('#serch_bar').css({"position":"relative","border":"none","z-index":"0"})
			}
		 
		 });
});
