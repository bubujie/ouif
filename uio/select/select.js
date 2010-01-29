jQuery(function($){
	$('button.selected')
		.click(function(){
			var selectObj = this.parentNode;
			if (selectObj.className == 'select') {
				selectObj.className = 'select open';
			} else {
				selectObj.className = 'select';
			}
		})
		.parent()
		.find('>ul')
		.mouseup(function(){
			var selectObj = this.parentNode;
			selectObj.className = 'select';
		});
});