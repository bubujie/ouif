jQuery(function($){

	var menu = $('div.menu');
	var major = $('div.major');
	var li_list = major.find('li');
	
	// Selected
	function onselectmenu(){
		var t = $(this);
		var myclass = [];
		
		t.parentsUntil('div.major').filter('li').each(function(){
			myclass.push( $(this).attr('class') );
		});
		
		myclass = myclass.join(' ');
		if (!major.hasClass(myclass)) major.attr('class','major').addClass(myclass);
	}
	
	// Show
	function show_this(){
		var t = $(this);
		
		li_list.removeClass('active');
		t.parentsUntil('div.major').filter('li').addClass('active');
		
		// IE7 or IE7 documentMode bug fix
		if($.browser.msie) {
			var v = document.documentMode || parseInt($.browser.version);

			if (v == 7) {
				var div = t.parentsUntil('div.sub').eq(-1);
				div.css('width', '').css('width', div.width()+'px');
			}
		}
	}
	li_list.find('>a').click(onselectmenu).mouseover(show_this).focus(show_this);
	
	// Hide
	function hide_this(){
		li_list.removeClass('active');
	}
	menu.mouseleave(hide_this);
	li_list.find('div.sub>ul').mouseleave(hide_this);
	li_list.find('>a').focusout(hide_this);
	li_list.find('div.sub li:last-child>a').focusout(hide_this);

	//icon
	major.find('div.sub').prev('a').find('>span').append('<span class="i"></span>');
	
});





