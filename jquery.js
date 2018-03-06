window.onload = function() {

	var myElement = $('.fade');

	$(window).on('scroll', function() {
	    var st = $(this).scrollTop();
	    myElement.css({
	        'opacity' : 1 - st/800
	    });
	});

	$(document).on("scroll", function () {
		var pageTop = $(document).scrollTop()
		var pageBottom = pageTop + $(window).height()
		var tags = $(".fade2")

		for (var i = 0; i < tags.length; i++) {
			var tag = tags[i]

			if ($(tag).position().top < pageBottom) {
				$(tag).addClass("visible")
			} 
			else {
				$(tag).removeClass("visible")
			}
		}
	}) 
}