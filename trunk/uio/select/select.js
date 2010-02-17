jQuery(function($){
	
	var select_ui = $('div.select');
	var button_ui = $('button.selected');
	
	function show_option(){
		var selectObj = this.parentNode;
		if (selectObj.className == 'select') {
			selectObj.className = 'select open';
		} else {
			selectObj.className = 'select';
		}
	}
	button_ui.click(show_option);
	
	function set_label(){
		var t = $(this);
		var v = t.next('label').text();
		t.parents('ul').prev(button_ui).text('');
		t.parents('ul').prev(button_ui).append(v);
	}
	select_ui.find('>ul>li>input').change(set_label).focus(set_label);
		
	function set_anchor(){
		var t = $(this);
		var v = t.text();
		t.parents('ul').prev(button_ui).text('');
		t.parents('ul').prev(button_ui).append(v);
	}
	select_ui.find('>ul>li>a').click(set_anchor).click(hide_option);
			
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			t.parents('div.select:first').removeClass('open');
		}, 1);
	}
	
	select_ui.find('>ul').mouseup(hide_option);
});