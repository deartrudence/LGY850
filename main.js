$(window).scroll(function (e) {
	if($(window).scrollTop() > 50){
		$('nav').addClass('black-background')
	} else {
		$('nav').removeClass('black-background')
	}
});

