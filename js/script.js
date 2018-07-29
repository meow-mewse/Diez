$(document).ready(function(){

	$('.burger').on('click', function(){
	 	$(this).toggleClass('burger--active');
	 	$(".main-nav").toggleClass('main-header__nav main-header__nav--open');
	 	$(".burger__inner").toggleClass('burger__inner--active');
	 	$(".burger__inner::before").addClass('.burger__inner--active::before');
	 	$(".burger__inner::after").addClass('.burger__inner--active::after');
	 });

	$('.main-slider').slick({
		dots: false,
		arrow: true,
		speed: 500,
		slidesToShow: 1,
		});

	function CheckWindowSize() {

		if ( $(window).width() < 991) {
		$('.main-slider').slick({
		dots: false,
		arrow: false,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 500,
		slidesToShow: 1,
		});
	}

	else {
		$('.main-slider').slick('unslick');
	}
}

		CheckWindowSize();

		$(window).on('resize', function(){
		CheckWindowSize();
	});

});