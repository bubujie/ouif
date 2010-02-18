jQuery(function($){
	
	// Common
	var select_root = $('div.select');
	var select_value = $('.myValue');
	var select_a = $('div.select>ul>li>a');
	var select_input = $('div.select>ul>li>input[type=radio]');
	var select_label = $('div.select>ul>li>label');
	
	// Default Value
	var default_value = $('div.select>ul>li:first-child>label').text();
	$('div.myValue').append(default_value);
	
	// Line
	select_value.focusin(function(){$(this).addClass('outLine');});
	select_value.focusout(function(){$(this).removeClass('outLine');});
	select_input.focusin(function(){$(this).parents('div.select').children('div.myValue').addClass('outLine');});
	select_input.focusout(function(){$(this).parents('div.select').children('div.myValue').removeClass('outLine');});
	
	// Show
	function show_option(){
		$(this).parents('div.select:first').toggleClass('open');
	}
	
	// Hover
	function i_hover(){
		$(this).parents('ul:first').children('li').removeClass('hover');
		$(this).parents('li:first').toggleClass('hover');
	}
	
	// Hide
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			t.parents('div.select:first').removeClass('open');
		}, 1);
	}
	
	// Set Input
	function set_label(){
		var v = $(this).next('label').text();
		$(this).parents('ul:first').prev(select_value).text('').append(v);
		$(this).parents('ul:first').prev(select_value).addClass('selected');
	}
	
	// Set Anchor
	function set_anchor(){
		var v = $(this).text();
		$(this).parents('ul:first').prev(select_value).text('').append(v);
		$(this).parents('ul:first').prev(select_value).addClass('selected');
	}

	select_value.mouseover(show_option).click(show_option);
	select_root.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open');});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	select_input.change(set_label);
	select_label.hover(i_hover).click(hide_option);
	
			
});