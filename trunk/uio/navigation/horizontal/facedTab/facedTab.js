jQuery(function($){
	var tab = $('.facedTab');
	tab.removeClass('jsOff');
	function onSelectTab(){
		var t = $(this);
		var myclass = [];
		t.parentsUntil('.facedTab:first').filter('li').each(function(){
			myclass.push( $(this).attr('class') );
		});
		myclass = myclass.join(' ');
		if (!tab.hasClass(myclass)) tab.attr('class','facedTab').addClass(myclass);
	}
	tab.find('li>a').click(onSelectTab).focus(onSelectTab);
});