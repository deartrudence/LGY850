$(window).scroll(function (e) {
	if($(window).scrollTop() > 50){
		$('nav').addClass('black-background')
	} else {
		$('nav').removeClass('black-background')
	}
});

$("a[href*='#']").on('click', function () {
	ref = $(this).attr('href')
	console.log('click', ref)

	$('html, body').animate({
		scrollTop: $(ref).offset().top - $('nav').innerHeight() - 25
	}, 2000);
	return false;
});

