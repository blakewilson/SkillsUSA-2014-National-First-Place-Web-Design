// Create our Variables for the slider
var ul;
var li_items;
var li_number;
var image_number = 0;
var javascript_slider_width = 0;
var image_width;
var current = 0;

//Create the function "transitions"

function transitions() {
	ul = document.getElementById('javascript_slider');
	li_items = ul.children;
	li_number = li_items.length;
	for(i = 0; i < li_number; i++) {
		image_width = li_items[i].childNodes[0].clientWidth;
		javascript_slider_width += image_width;
		image_number++;
	}
ul.style.width = parseInt(javascript_slider_width) + 'px';
slider(ul);
}

//create the slider function, this will add up all image sizes and parse the negative width of all images combined.
// settings for how long each slide is and the transition are controlled thought delay and duration

function slider() {
	animate({
		delay: 17,
		duration: 3000,
		alpha:function(p){
			return Math.max(0, -1 + 2 * p) 
		},
		step:function(alpha) {
			ul.style.left = '-' + parseInt(current * image_width + alpha * image_width) + 'px';
		},
		callback:function(){
			current++
			if(current < li_number - 1) {
				slider();
			}
			else {
				var left = (li_number - 1) * image_width;
				setTimeout(function(){goBack(left)},2000);
				setTimeout(slider, 4000)
			}
		}
	});
}
	
//creates function slider_left_limitation
function goBack(slider_left_limitation){
	current = 0;
	setInterval(function(){
		if(slider_left_limitation >= 0){
			ul.style.left = '-' + parseInt(slider_left_limitation) + 'px';
			slider_left_limitation -= image_width / 10;
		}
	}, 17);
}


//create function waltdisney because this is where all the animation (magic) happens ;D
//this function always has some settings for delay function per slider, it grabs the amount of time that has already passed and divides it by the duration of the slider and parses it as an integer in pixels.
function animate(waltdisney){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / waltdisney.duration
		if(progress > 1){
			progress = 1;
		}
		var alpha = waltdisney.alpha(progress);
		waltdisney.step(alpha);
		if(progress == 1){
			clearInterval(id);
			waltdisney.callback();
		}
	}, waltdisney.delay || 17);
}


//declare on load
window.onload = transitions;
