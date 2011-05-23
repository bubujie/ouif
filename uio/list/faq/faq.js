jQuery(function($){
	// Frequently Asked Question
	var article = $('.faq .article');
	article.addClass('hide');
	article.find('.a').hide();
	article.eq(0).removeClass('hide');
	article.eq(0).find('.a').show(); // 첫 번째 항목을 열어 둠
	$('.faq>ul>.article>.q>a').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지움
			article.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지움
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.a').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('.a').slideUp(100);
		}
		return false;
	});
	$('.faq>.faqHeader>.showAll').click(function(){
		var hidden = $('.faq .article.hide').length;
		if(hidden > 0){
			article.removeClass('hide').addClass('show');
			article.find('.a').slideDown(100);
		} else {
			article.removeClass('show').addClass('hide');
			article.find('.a').slideUp(100);
		}
	});
});