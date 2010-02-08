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
	
	li_list
		.find('>a').mouseover(
			function(){ li_list.removeClass('hover'); $(this).parentsUntil('div.major').filter('li:last').addClass('hover'); }
		)
		.focus(
			function(){ li_list.removeClass('hover'); $(this).parentsUntil('div.major').filter('li:last').addClass('hover'); }
		);

	li_list
		//.find('>div.sub')
		.mouseleave(
			function(){ li_list.removeClass('hover'); }
		);
});





