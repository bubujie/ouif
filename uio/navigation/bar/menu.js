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
	}
	
	var li_list = major.find('li');

	function show_this(){
		li_list.removeClass('active');
		$(this).parentsUntil('div.major').filter('li').addClass('active');
	}
	
	li_list.find('>a').click(onselectmenu).mouseover(show_this).focus(show_this);
	
	//icon
	major.find('div.sub').prev('a').find('>span').append('<span class="i"></span>');
	
});





