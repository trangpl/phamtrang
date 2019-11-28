/*=== HOME SVG ELEMENTS ===*/
Snap.load('../svg/main_illustration/elements.svg',function(f){
	//- function set
	function setSVG (obj) {
		$.each(obj, function(value){
			var s = Snap('#'+this.name)
				if ('viewset' in this) {
					s.attr({viewBox: this.viewset[0]+' '+this.viewset[1]+' '+this.viewset[2]+' '+this.viewset[3]});
				} else {
					s.attr({viewBox: '0 0 500 500'});
				}
			for (var i = 0; i < this.load.length; i++) {
				s.append(f.select('#'+this.load[i]))
			}
		})
	}
	//- 1. BACKDROP
	var backdrop = [
		{name: 'slide1',load: ['com'],},
		{name: 'slide2',load: ['board']},
		{name: 'static',load: ['ground','musicnotes','designer', 'coffee', 'cactus', 'book', 'sounds']}
	]
		//- NOTEs
		var notePaths = []
		var colors = ['#00acec', '#ffa900', '#ff55a9', '#61cd41', '#ac7b4a', '#ff0000']
			//- collect paths
			for (var i = 1; i < 9; i++) {
				var notePath = f.select('#nw'+i)
				notePaths.push(notePath);
			}
			//- make note fly along paths
			for (var i = 1; i < 10; i++) {
				var notedelay = getRandomArbitrary(500, 2000)
				var mn = f.select('#mn' + i)
				flynotes(mn, notePaths, colors);
			};
		// SOUNDs------------------------------------------------------
			var sw_count = 0
			var sw = f.select('#sounds')
			function soundwave(){
				if (sw_count < 3) {
					var swOpacity = parseInt(sw.attr('opacity'));
					var newOpacity = (swOpacity === 1) ? 0 : 1;
					sw.animate({
						opacity: newOpacity},
						100, soundwave);
					sw_count++;
				} else {
					sw_count = 0;
					setTimeout(soundwave,getRandomArbitrary(1000,3000));
				}
			}
			soundwave()
		// load elements
		setSVG(backdrop)
	// 2, INTRO 1
	var intro1 = [
		{name: 'cont_en',load: ['cont'],viewset: '0 0 140 140'}
	]
	setSVG(intro1)
	// 3. PR1
	// var pr1 = [
	// 	{name: 'cont_en',load: ['cont'],viewset: '0 0 140 140'}
	// ]
var ft_mb = Snap('#ft_mb1')
var ft_rain = Snap('#ft_rain')

var contact_en = Snap('#cont_en')

var pr1_br2 = Snap('#pr1_br2')
var pr1_bg = Snap('#pr1_bg')
var pr2_br = Snap('#pr2_br')
// var pr2_br2 = Snap('#pr2_br2')
var pr2_bg = Snap('#pr2_bg')
var pr3_br = Snap('#pr3_br')
var pr3_br2 = Snap('#pr3_br2')
var pr3_bg = Snap('#pr3_bg')
var pr4_br = Snap('#pr4_br')
var pr4_br2 = Snap('#pr4_br2')
var pr4_bg = Snap('#pr4_bg')
var ft_deskbg = Snap('#ft_deskbg')
	var g = []
	//- SHAPEs
		var shapePaths = []
		var shapes = []
		// paths
		for (var i = 1; i < 7; i++) {
			var selectPath = f.select('#shapeway'+i)
			shapePaths.push(selectPath);
		}

	
	
	// CACTUS-----------------------------------------------------------
		var cactus = ['ct_line','ct_body','eye1','eye2','mount']
		var ct = []
		for (var i = 0; i < 5; i++) {
			var ctselect = f.select('#'+cactus[i])
			ct.push(ctselect);
		}
		function cactus(){
			var ct_time = getRandomArbitrary(7000, 15000)
			setTimeout(function(){
				ct[0].animate({
					// param1: value1
					},
					speed, function() {
					/* stuff to do after animation is complete */
				});
			},ct_time)
		}
		// PR1-----------------------------------------------------------
	// loader

	// FALLING OBJECTs
	function flyShape(el, ex, ey, opa){
	// variable
		var rdPos = getRandomArbitrary(20, 480)
		var spin = getRandomArbitrary(-1060, 1000)
		var time = getRandomArbitrary(4000, 15080)
	// Reset position
		el.attr({
			transform: 't ' + rdPos +' '+'50',
			stroke: 'white',
			opacity: 0,
			fill: 'none'
		});
		setTimeout(function(){
			el.animate({
				opacity: opa},
				500);
		}, time*0.1)
		el.animate({
			transform: 't '+rdPos+' 520 r'+spin+' '+ex+' '+ey},
			time,mina.easeOut, function(){
				flyShape(el, ex, ey, opa);
			});
	};

	for (var i = 1; i < 5; i++) {
		var shape = f.select('#shape'+i)
		var ex = shape.getBBox().cx
		var ey = shape.getBBox().cy
		var clone1 = shape.clone()
		var clone2 = shape.clone()
		var cloneG2 = ft_rain.group(clone2)
		clone1.attr({
			transform: 's1.4,1.4',
		});
		var cloneG1 = ft_rain.group(clone1)
		flyShape(shape, ex, ey, 0.5);
		flyShape(cloneG1, ex, ey, 0.7);
		flyShape(cloneG2, ex, ey, 0.3);
	};
	// earphones
	

	ft_mb.append(f.select('#ft_mb'));


	contact_en.append(f.select('#cont'));
	pr1_bg.append(f.select('#isme_bg'));
	pr2_bg.append(f.select('#o99_bg'));
	// pr2_br2.append(f.select('#address_bar'));
	pr3_bg.append(f.select('#ibd_bg'));
	pr4_bg.append(f.select('#bigS_bg'));

	ft_deskbg.attr({
		viewBox: '-112 0 736 448',
	});
		
	ft_rain.append(f.select('#clouds'));
	ft_deskbg.append(f.select('#ft_desk'));
});
// falling shapes

