function tagSort(selector) {
	var tag = $(selector);
	var tagParent = tag.parent();
	
	tag.remove().sort(function(a, b){
		var a = $(a).text();
		var b = $(b).text();
		
		if (a == b) return 0;
		if (a > b) return 1;
		else return -1;
	});
	
	tagParent.append(tag);
}