jQuery(function($){
	var major = $('div.major');
	
	function onselectmenu(){
		var t = $(this);
		var myclass = [];
		
		t.parentsUntil('div.major').filter('li').each(function(){
			myclass.push( $(this).attr('class') );
		});
		
		myclass = myclass.join(' ');
		if (!major.hasClass(myclass)) major.attr('class','major').addClass(myclass);
		return false;
	}
	
	var li_list = major.find('li');
	
	li_list.find('>a').click(onselectmenu);
	
	if ($.browser.msie && $.browser.version < 7) {
		li_list
			.hover(
				function(){ li_list.removeClass('hover'); $(this).addClass('hover') }
			)
			.mouseleave(
				function(){ $(this).removeClass('hover'); }
			);
	}
});





