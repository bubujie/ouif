jQuery(function($){

	var tab = $('div.tab');
	tab.css('height', tab.find('>ul>li>ul:visible').height()+40);

	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('div.tab:first').attr('class', 'tab '+myClass);
		tab.css('height', t.next('ul').height()+40);
	}
	
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});





