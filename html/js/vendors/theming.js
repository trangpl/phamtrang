//
// 
$(document).ready(function() {
// 2. random_background
// ---------------------------------------------------------

var shapes = ['tri','hex','pen'];
for (var i = 1; i <=2 ; i++) {
	$.each(shapes,function(index,value){
		var loader = Snap("#" + value + i);
		Snap.load('svg/random_movement/rd_' + value + '.svg',function(f){
		  loader.append(f);
		});
        var loader_w = Snap("#" + value + i + "_white");
        Snap.load('svg/random_movement/rd_' + value + '.svg',function(f){
          loader_w.append(f);
        });
	});
};
animateDiv();
animateDiv2();
animateDiv3();
animateDiv4();
animateDiv5();
animateDiv6();
function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}
function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.tri1').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.tri1').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    }); 
};
function animateDiv2(){
    var newq = makeNewPosition();
    var oldq = $('.tri2').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.tri2').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv2();        
    }); 
};
function animateDiv3(){
    var newq = makeNewPosition();
    var oldq = $('.pen2').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.pen2').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv3();        
    }); 
};
function animateDiv4(){
    var newq = makeNewPosition();
    var oldq = $('.pen1').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.pen1').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv4();        
    }); 
};
function animateDiv5(){
    var newq = makeNewPosition();
    var oldq = $('.hex1').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.hex1').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv5();        
    }); 
};
function animateDiv6(){
    var newq = makeNewPosition();
    var oldq = $('.hex2').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.hex2').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv6();        
    }); 
};


function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = .04;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
// 1. logo
// ---------------------------------------------------------

//    END
//## -----------------------------------------
});