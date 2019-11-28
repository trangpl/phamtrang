$(document).ready(function() {
//## -----------------------------------------
// 1- carousel
var sliderTime = 5000
//## -----------------------------------------
var mSOptions = {
	animInFromLeft: 'fade-in',
	animInFromRight: 'fade-in',
	animOutToLeft: 'fade-out',
	animOutToRight: 'fade-out',
	bullets: true,
	navButtons: false,
	// slideClass: 'ohshit',
	pauseOnHover: false,
	timerDelay: sliderTime,
}
var mS = new Foundation.Orbit($('#impression'), mSOptions);

//## -----------------------------------------
// scrolling
function paraScroll(el){
	var el1 = $('#'+el)
	var el2 = $('#'+el+'.active .illus_bg')
	var el3 = $('#'+el+'.active .para-box')
	$(window).scroll(function() {
	   var oT = el1.offset().top,
	       wH = $(window).height(),
	       wT = $(this).scrollTop();
	   if ((wT+wH-oT)*100/wH > 40){
	       el1.addClass('active');
	   }
	});
}
paraScroll('pr_about');
paraScroll('pr_skills');
paraScroll('pr1');
paraScroll('pr2');
paraScroll('pr3');
paraScroll('pr4');

//## -----------------------------------------
});