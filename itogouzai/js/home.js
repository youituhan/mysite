$(function(){ 
	$('.mainSlider .slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1, 
		autoplay: true,
		fade:true,
		arrows:false,
		dots:true, 
		infinite: true, 
		autoplay:true,
		pauseOnHover:false,
        pauseOnFocus: false,
		autoplaySpeed: 3000,
		speed: 1000,
		cssEase: 'linear',
	}); 
	$('.mainSlider .slider').find('.slick-active .item').addClass('active');
	$('.mainSlider .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(this).find('.slick-slide').eq(nextSlide).find('.item').addClass('active'); 
	}); 
	$('.mainSlider .slider').on('afterChange', function(event, slick, currentSlide){
		$(this).find('.slick-slide').eq(currentSlide).siblings().find('.item').removeClass('active');
	}); 
	
	$('.businessWrap .slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1, 
		dots:true, 
	}); 
	
});