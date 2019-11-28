//
// TP-CustomJS
$(document).ready(function() {
	
// loader
	// $('#loader').animate({
	// 	opacity: 0,},
	// 	700, function() {
	// 	$('#loader').css({
	// 		display: 'none',
	// 	});
	// });



// burger
//## -----------------------------------------
var burger = $('.burger')
var backdrop = $('.backdrop')
var nav = $('#nav')
burger.click(function(){
	$(this).toggleClass('active');
	nav.toggleClass('active')
	if (nav.hasClass('show')) {
		nav.removeClass('active');
		setTimeout(function(){
			nav.removeClass('show')
		},1000)
	} else {
		nav.addClass('show');
		nav.addClass('active')
	}
});
backdrop.on('click', function(){
	nav.removeClass('active');
	setTimeout(function(){
			nav.removeClass('show')
		},1000)
	burger.removeClass('active');
})
// header
//## -----------------------------------------
// var logo = Snap('#logo')
// Snap.load('../svg/logo_theme.svg',function(f){
// 	  logo.append(f);
// 	});

var marker = Snap('#marker')
Snap.load('../svg/marker.svg',function(f){
	marker.append(f);
});

//    END
//## -----------------------------------------
});