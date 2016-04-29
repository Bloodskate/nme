function EasyPeasyParallax() {
	var	windowWidth = $(window).width();
	if(windowWidth > 980){
		scrollPos = $(this).scrollTop();
		$('.parallax').not('.no-aminate').css({
			'background-position' : '50%' + (-scrollPos/4)+"px"
		});
		var text = $('.text').not('.no-aminate');
		text.css({
			'margin-top': (scrollPos/4)+"px",
			'opacity': 1-(scrollPos/250)
		});
		var opacityValue = text.css('opacity');
		if(opacityValue == 0){
			text.hide();
		}else{
			text.show();
		}
	}	
}
function someResize(){
	EasyPeasyParallax();
	var	windowWidth = $(window).width(),
		maxHeight = $('.near-big').height() - 42
	if(windowWidth > 768){
		$('.big-preview .thumbnail').css('height', maxHeight);
	}
	else{
		$('.big-preview .thumbnail').css('height', 'auto');
	}	
	if($('.colorbox').length){
		$('a.colorbox').colorbox({
			rel:'gal',
			retinaImage: true,
			opacity: 1,
			current: false,
			maxWidth: '95%',
			maxHeight: '95%'
		})
	} 
}
$(document).ready(function(){
	someResize();
	
	$('a[rel="popover"]').popover();
	$('a[rel="tooltip"]').tooltip();
	$('.carousel').carousel()

	
	$(window).scroll(function() {
		EasyPeasyParallax();
		if ($(this).scrollTop() > 300) {
			$('.goTop-link').fadeIn();
		} else {
			$('.goTop-link').fadeOut();
		}
	});
	
	$('.goTop').on('click', function(){
		$('body,html').animate({scrollTop: 0}, 1000);
		return false;
	}); 
	
});

$(window).resize(function(){
	someResize();
})