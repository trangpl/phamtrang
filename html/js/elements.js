/*=== GET RANDOM NUMBER===*/
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/*=== FLYING NOTEs ===*/
function flynotes(el, notePaths, colors){
	//- variable
	var noteway = notePaths[Math.floor(Math.random() * notePaths.length)]
	var notewayLen = noteway.getTotalLength()
	var time = getRandomArbitrary(6000, 15000)
	var color = colors[Math.floor(Math.random() * colors.length)]
	// var clone = el.clone()
	el.attr({fill: color,
		opacity: 0,
	});

	setTimeout(function(){
		el.animate({
			opacity: 1},
			500,mina.easeIn);
	}, time*0.2);

	setTimeout(function(){
		el.animate({
			opacity: 0},
			500,mina.easeOut);
	}, time*0.9)
	//- animate
	Snap.animate(0, notewayLen, function( value ) {
	   movePoint = noteway.getPointAtLength( value );
	   el.transform( 't' + parseInt(movePoint.x - 10) + ',' + parseInt( movePoint.y - 10) + 'r' + (movePoint.alpha - 150));
	}, time,mina.easeOutIn, function(){
		flynotes(el, notePaths, colors);
		}
	);
}

/*=== LOAD SVG AND SET VIEWBOX TO DIV ===*/
