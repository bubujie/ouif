jQuery(function($){
	// Input Clear
	var iText = $('label.iLabel').next('.iText');
	iText.attr('value','');
	iText
		.focus(function(){
			$(this).prev('label.iLabel').attr('style','visibility:hidden');
		})
		.blur(function(){
			if($(this).val() == ''){
				$(this).prev('label.iLabel').attr('style','visibility:visible');
			}
		});
});