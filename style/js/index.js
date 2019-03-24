// 页码
$(".main-page ul li").not($(".main-page ul li").eq(3)).each(function() {
	$(this).click(function(){
		var thisval = $(this).text();
		$(".main-page aside span").text(thisval);
	})
});  

$(".main-page ul li").eq(0).click(function(){
	var val = parseInt($(this).text()) - 3;
	var val0 = parseInt($(".main-page ul li").eq(0).text());
	var val1 = parseInt($(".main-page ul li").eq(1).text());
	var val2 = parseInt($(".main-page ul li").eq(2).text());

	if(val >= 1){
				$(this).text(val);
				$(".main-page ul li").eq(0).text(val0 - 3);
				$(".main-page ul li").eq(1).text(val1 - 3);
				$(".main-page ul li").eq(2).text(val2 - 3);
				$(".main-page ul li").eq(3).show();
			}
});  
$(".main-page ul li").eq(2).click(function(){
	var val = parseInt($(this).text()) + 3;
	var nextval = parseInt($(".main-page ul li").eq(4).text()) -1 ;
	var val0 = parseInt($(".main-page ul li").eq(0).text());
	var val1 = parseInt($(".main-page ul li").eq(1).text());

	if(val == nextval){
		$(".main-page ul li").eq(3).hide();
		$(this).text(val);
		$(".main-page ul li").eq(0).text(val0 + 3);
		$(".main-page ul li").eq(1).text(val1 + 3);
	}else{
		if(val < nextval){
			$(this).text(val);
			$(".main-page ul li").eq(0).text(val0 + 3);
			$(".main-page ul li").eq(1).text(val1 + 3);
			$(".main-page ul li").eq(3).show();
		}
	}
});  

$(".main-page aside").eq(1).click(function(){
	var spanval = parseInt($(".main-page aside span").text());
	if(spanval > 1){
		var prevval = spanval - 1;
		$(".main-page aside span").text(prevval);
	}
});  
$(".main-page aside").eq(2).click(function(){
	var spanval = parseInt($(".main-page aside span").text());
	if(spanval < 12){
		var nextval = spanval + 1;
		$(".main-page aside span").text(nextval);
	}
}); 