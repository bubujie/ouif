jQuery(function($){
	// List Tab Navigation
	var tab_list = $('div.tab.list');
	var tab_list_i = tab_list.find('>ul>li');
	var tab_list_ii = tab_list.find('>ul>li>ul>li');
	tab_list.removeClass('jx');
	tab_list_i.find('>ul').css('display','none');
	tab_list_i.find('>ul>li[class=active]').parents('li').attr('class','active');
	tab_list.find('>ul>li[class=active]').find('>ul').css('display','block');
	tab_list.css('height', tab_list.find('>ul>li>ul:visible').height()+40);
	function listTabMenuToggle(event){
		var t = $(this);
		tab_list_i.find('>ul').hide();
		t.next('ul').show();
		tab_list_i.removeClass('active');
		t.parent('li').addClass('active');
		tab_list.css('height', t.next('ul').height()+40);
	}
	function listTabSubMenuActive(){
		tab_list_ii.removeClass('active');
		$(this).parent(tab_list_ii).addClass('active');
	}; 
	tab_list_i.find('>a[href=#]').click(listTabMenuToggle).focus(listTabMenuToggle);
	tab_list_ii.find('>a').click(listTabSubMenuActive).focus(listTabSubMenuActive);
});