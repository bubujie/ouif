jQuery(function($){
	// Tab Navigation
	var tab = $('div.tab');
	var tab_i = tab.find('>ul>li');
	var tab_ii = tab.find('>ul>li>ul>li');
	tab.removeClass('jx');
	tab_i.find('>ul').css('display','none');
	tab_i.find('>ul>li[class=active]').parents('li').attr('class','active');
	tab.find('>ul>li[class=active]').find('>ul').css('display','block');
	tab.css('height', tab.find('>ul>li>ul:visible').height()+40);
	function tabMenuToggle(event){
		var t = $(this);
		tab_i.find('>ul').hide();
		t.next('ul').show();
		tab_i.removeClass('active');
		t.parent('li').addClass('active');
		tab.css('height', t.next('ul').height()+40);
	}
	function tabSubMenuActive(){
		tab_ii.removeClass('active');
		$(this).parent(tab_ii).addClass('active');
	}; 
	tab_i.find('>a[href=#]').click(tabMenuToggle).focus(tabMenuToggle);
	tab_ii.find('>a').click(tabSubMenuActive).focus(tabSubMenuActive);
});