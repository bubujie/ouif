jQuery(function($){
	
	// Menu
	var sMenu = $('div.sMenu');
	var sItem = sMenu.find('>ul>li');
	var ssItem = sMenu.find('>ul>li>ul>li');
	
	sItem.find('ul').attr('style','display:none');

	function sMenuToggle(){
		if ($(this).next('ul').is(':hidden')) {
			sItem.find('>ul').slideUp(100);
			$(this).next('ul').slideDown(100);
		} 
		else if(!$(this).next('ul').length) {
			sItem.find('>ul').slideUp(100);
		} 
		else {
			$(this).next('ul').slideUp(100);
		}
		sItem.removeClass('active');
		$(this).parent('li').addClass('active');
	}
	sItem.find('>a').focus(sMenuToggle);
	
	ssItem.find('>a').focus(function(){
		ssItem.removeClass('active');
		$(this).parent(ssItem).addClass('active');
	});
	
	//icon
	sMenu.find('>ul>li>ul').prev('a').append('<span class="i"></span>');
});



