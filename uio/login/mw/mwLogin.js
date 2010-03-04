jQuery(function($){
	// oLogin
	$('.oAnchor').click(function(){
		$('#login').removeClass('gLogin');
		$('#login').addClass('oLogin');
	});
	// gLogin
	$('.gAnchor').click(function(){
		$('#login').removeClass('oLogin');
		$('#login').addClass('gLogin');
	});
	// Warning
	$('#keepid').change(function(){
		if($('#keepid[checked]')){
			$('.warning').toggleClass('open');
		};
	});
	// ID Clear
	$('.iText.uid').focus(function(){
		if($(this).val() == 'ID'){
			$(this).attr('value','');
		}
	});
	$('.iText.uid').blur(function(){
		if($(this).val() == ''){
			$(this).attr('value','ID');
		}
	});
	// PW Clear
	$('.iText.upw').focus(function(){
		if($(this).val() == 'PASSWORD'){
			$(this).attr('value','');
		}
	});
	$('.iText.upw').blur(function(){
		if($(this).val() == ''){
			$(this).attr('value','PASSWORD');
		}
	});
	// Open ID Clear
	$('.iText.oid').focus(function(){
		if($(this).val() == 'Open ID'){
			$(this).attr('value','');
		}
	});
	$('.iText.oid').blur(function(){
		if($(this).val() == ''){
			$(this).attr('value','Open ID');
		}
	});
	// Validation
	$('#login>.gLogin input[type=submit]').click(function(){
		if($('.iText.uid').val() == 'ID' && $('.iText.upw').val() == 'PASSWORD'){
			alert('ID와 PASSWORD를 입력하세요!');
			return false;
		}
		else if($('.iText.uid').val() == 'ID'){
			alert('ID를 입력하세요!');
			return false;
		}
		else if($('.iText.upw').val() == 'PASSWORD'){
			alert('PASSWORD를 입력하세요!');
			return false;
		}
	});
	$('#login>.oLogin input[type=submit]').click(function(){
		if($('.iText.oid').val() == 'Open ID'){
			alert('Open ID를 입력하세요!');
			return false;
		}
	});
});