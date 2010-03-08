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