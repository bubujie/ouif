jQuery(function($){
	var loginWindow = $('.mwLogin');
	var login = $('#login');
	var uid = $('.iText.uid');
	var upw = $('.iText.upw');
	var oid = $('.iText.oid');
	
	// Show Hide
	$('.loginTrigger').click(function(){
		loginWindow.addClass('open');
	});
	$('#login .close').click(function(){
		loginWindow.removeClass('open');
	});
	// oLogin
	$('.oAnchor').click(function(){
		login.removeClass('gLogin');
		login.addClass('oLogin');
	});
	// gLogin
	$('.gAnchor').click(function(){
		login.removeClass('oLogin');
		login.addClass('gLogin');
	});
	// Warning
	$('#keepid').change(function(){
		if($('#keepid[checked]')){
			$('.warning').toggleClass('open');
		};
	});
	// ID Clear
	uid
		.focus(function(){
			uid.prev('label').css('visibility','hidden');
		})
		.blur(function(){
			if($(this).val() == ''){
				uid.prev('label').css('visibility','visible');
			}
		});
	if (uid.val()) uid.prev('label').css('visibility','hidden');
	// PW Clear
	upw
		.focus(function(){
			upw.prev('label').css('visibility','hidden');
		})
		.blur(function(){
			if($(this).val() == ''){
				upw.prev('label').css('visibility','visible');
			}
		});
	if (upw.val()) upw.prev('label').css('visibility','hidden');
	// Open ID Clear
	oid
		.focus(function(){
			oid.prev('label').css('visibility','hidden');
		})
		.blur(function(){
			if($(this).val() == ''){
				oid.prev('label').css('visibility','visible');
			}
		});
	if (oid.val()) oid.prev('label').css('visibility','hidden');
	// Validation
	$('#login>.gLogin input[type=submit]').click(function(){
		if(uid.val() == '' && upw.val() == ''){
			alert('ID와 PASSWORD를 입력하세요!');
			return false;
		}
		else if(uid.val() == ''){
			alert('ID를 입력하세요!');
			return false;
		}
		else if(upw.val() == ''){
			alert('PASSWORD를 입력하세요!');
			return false;
		}
	});
	$('#login>.oLogin input[type=submit]').click(function(){
		if(oid.val() == ''){
			alert('Open ID를 입력하세요!');
			return false;
		}
	});
	// ESC Event
	$(document).keydown(function(event){
		if(event.keyCode != 27) return true;
		if (loginWindow.hasClass('open')) {
			loginWindow.removeClass('open');
		}
		return false;
	});
	// Hide Window
	loginWindow.find('>.bg').mousedown(function(event){
		loginWindow.removeClass('open');
		return false;
	});
});