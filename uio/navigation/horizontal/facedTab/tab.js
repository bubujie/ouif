jQuery(function($){
	var tab = $('ul.tab');
	
	function onselecttab(){
		var t = $(this);
		var myclass = [];
		
		t.parentsUntil('ul.tab').filter('li').each(function(){
			myclass.push( $(this).attr('class') );
		});
		
		myclass = myclass.join(' ');
		if (!tab.hasClass(myclass)) tab.attr('class','tab').addClass(myclass);
	}
	
	tab.find('li>a').hover(onselecttab).focus(onselecttab);
});




