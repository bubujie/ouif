jQuery(function(){
	// Help Toggle
	$('.ic>.iHelp').click(function(){
		$(this).parent('.ic').find('.desc').toggleClass('hide');
	});
});