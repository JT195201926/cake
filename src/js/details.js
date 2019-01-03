$(function(){
	$('header').load('index.html header');
	
	var $oSmallpic = $('.small_pic');
	var $oMark = $('.mark');
	var $oFloat = $('.float_layer');
	var $oBigPic = $('.big_pic');
	var $oBigImg = $('.big_pic img');
	$oMark.mouseenter(function(){
		$oFloat.css({display:"block"});
		$oBigPic.css({display :"block"});
	});
	$oMark.mouseleave(function(){
		$oFloat.css({display : 'none'});
		$oBigPic.css({display :"none"});
	})
	$oMark.mousemove(function(evt){
		var e = evt || window.event;
		var x=$oSmallpic.offset()
		var left = e.pageX - x.left - $oFloat.innerWidth() / 2;
		var top = e.pageY - x.top - $oFloat.innerHeight() / 2; 
		if(left <= 0){
			left = 0;
		}else if(left >= $oMark.innerWidth() - $oFloat.innerWidth()){
			left = $oMark.innerWidth() - $oFloat.innerWidth();
		}
		if(top <= 0){
			top=0;
		}else if(top>= $oMark.innerHeight() - $oFloat.innerHeight()){
			top = $oMark.innerHeight() - $oFloat.innerHeight();
		}
		$oFloat.css({left : left + "px"});
		$oFloat.css({top : top + "px"});
		var pX = left/($oMark.innerWidth() - $oFloat.innerWidth()) ;
		var pY = top/($oMark.innerHeight() - $oFloat.innerHeight()) ;
		console.log();
        $oBigImg.css({left : -pX*($oBigImg.innerWidth() - $oBigPic.innerWidth()) + "px"});
       	$oBigImg.css({top : -pX*($oBigImg.innerHeight() - $oBigPic.innerHeight()) + "px"});
	});
	
	$('.footer').load("index.html .footer");
})
