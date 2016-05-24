var localUrl = "codepen.io";

var links = $('a');

links.each(function(){
	var href = $(this).attr('href');
	if (!href.match(localUrl) && href[0] !== '/') {
		$(this).attr('target', '_blank');
	}
});