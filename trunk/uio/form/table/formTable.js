jQuery(function(){
	// Help Toggle
	$('.item>.iHelp').click(function(){
		$(this).parent('.item').find('.desc').toggleClass('hide');
	});
});