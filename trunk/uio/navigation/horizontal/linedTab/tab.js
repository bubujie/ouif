jQuery(function($){
	// Lined Tab Navigation
	var tab_line = $('div.tab.line');
	var tab_line_i = tab_line.find('>ul>li');
	var tab_line_ii = tab_line.find('>ul>li>ul>li');
	tab_line.removeClass('jx');
	tab_line_i.find('>ul').hide();
	tab_line_i.find('>ul>li[class=active]').parents('li').attr('class','active');
	tab_line.find('>ul>li[class=active]').find('>ul').show();
	function lineTabMenuToggle(event){
		var t = $(this);
		tab_line_i.find('>ul').hide();
		t.next('ul').show();
		tab_line_i.removeClass('active');
		t.parent('li').addClass('active');
		return false;
	}
	function lineTabSubMenuActive(){
		tab_line_ii.removeClass('active');
		$(this).parent(tab_line_ii).addClass('active');
		return false;
	}; 
	tab_line_i.find('>a[href=#]').click(lineTabMenuToggle).focus(lineTabMenuToggle);
	tab_line_ii.find('>a[href=#]').click(lineTabSubMenuActive).focus(lineTabSubMenuActive);
});