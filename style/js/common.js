// 导航切换
$(window).resize(function(event) {
    a();
});
$("header nav button").on("click",function a(){
	$("header nav ul").slideToggle(500);
	if($("header nav button").is(".dis1")){
		$("header nav button").addClass("dis2");
		$("header nav button").removeClass("dis1");
	}else{
		$("header nav button").addClass("dis1");
		$("header nav button").removeClass("dis2");
	}
})

// 回到顶部
$(window).scroll(function() {
	if($(window).scrollTop() > window.screen.height){
		$(".b-top").fadeIn();
	}else{
		$(".b-top").fadeOut();
	}
});
$(".b-top").on("click",function(){
	$("html,body").animate({
		scrollTop:0
	},500);
	return false;
});


// high一下
$(".banner button").click(function(){
    var audio = $(this).find("audio")[0];
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
});