jQuery(function(){
	
	var article = $('.qna .article');
	article.addClass('hide');
	
	$('.qna .article .q .trigger').click(function(){
		article.addClass('hide'); //다른 답변이 닫히지 않도록 하려면 이 라인을 주석 처리
		$(this).parents('.article').toggleClass('hide');
	});
	
	$('.qna .hgroup .trigger').click(function(){
		var hidden = $('.qna .article.hide').length;
		if(hidden > 0){
			article.removeClass('hide');
		} else {
			article.addClass('hide');
		}
	});
	
});