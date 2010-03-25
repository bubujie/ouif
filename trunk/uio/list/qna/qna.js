jQuery(function(){
	
	var article = $('.qna .article');
	article.addClass('hide');
	
	$('.qna .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			myArticle.removeClass('hide').addClass('show');
		} else {
			myArticle.removeClass('show').addClass('hide');
		}
	});
	
	$('.qna .hgroup .trigger').click(function(){
		var hidden = $('.qna .article.hide').length;
		if(hidden > 0){
			article.removeClass('hide').addClass('show');
		} else {
			article.removeClass('show').addClass('hide');
		}
	});
	
});