jQuery(function($){
	
	var select_ui = $('div.select');
	var button_ui = $('button.selected');
	
	function show_option(){
		$(this).parents('div.select:first').addClass('open');
	}
	button_ui.mouseover(show_option).click(show_option);
	
	function list_hover(){
		$(this).parents('li').toggleClass('hover');
	}

	function set_label(){
		var v = $(this).next('label').text();
		$(this).parents('ul').prev(button_ui).text('').append(v);
	}
	select_ui.find('>ul>li>input').change(set_label).focus(set_label);
	select_ui.find('>ul>li>label').hover(list_hover);
		
	function set_anchor(){
		var v = $(this).text();
		$(this).parents('ul').prev(button_ui).text('').append(v);
	}
	select_ui.find('>ul>li>a').click(set_anchor).click(hide_option).hover(list_hover);
	select_ui.find('>ul>li>a').focus(list_hover);
			
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			t.parents('div.select:first').removeClass('open');
		}, 1);
	}
	select_ui.find('>ul').mouseup(hide_option);

	select_ui.mouseleave(function(){
		$(this).removeClass('open');
	});

});