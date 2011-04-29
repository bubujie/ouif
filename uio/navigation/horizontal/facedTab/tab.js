jQuery(function($){
	// Faced Tab Navigation
	var tab_face = $('div.tab.face');
	var tab_face_i = tab_face.find('>ul>li');
	var tab_face_ii = tab_face.find('>ul>li>ul>li');
	tab_face.removeClass('jx');
	tab_face_i.find('>ul').hide();
	tab_face_i.find('>ul>li[class=active]').parents('li').attr('class','active');
	tab_face.find('>ul>li[class=active]').find('>ul').show();
	function faceTabMenuToggle(event){
		var t = $(this);
		tab_face_i.find('>ul').hide();
		t.next('ul').show();
		tab_face_i.removeClass('active');
		t.parent('li').addClass('active');
		return false;
	}
	function faceTabSubMenuActive(){
		tab_face_ii.removeClass('active');
		$(this).parent(tab_face_ii).addClass('active');
		return false;
	}; 
	tab_face_i.find('>a[href=#]').click(faceTabMenuToggle).focus(faceTabMenuToggle);
	tab_face_ii.find('>a[href=#]').click(faceTabSubMenuActive).focus(faceTabSubMenuActive);
});