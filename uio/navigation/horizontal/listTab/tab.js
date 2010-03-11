jQuery(function($){
	var tab = $('div.tab');
	var tabHeight = tab.find('>ul>li>ul').height()+40;
	
	tab.css('height',tabHeight);
	
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('div.tab:first').attr('class', 'tab '+myClass);
	}
	
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});





