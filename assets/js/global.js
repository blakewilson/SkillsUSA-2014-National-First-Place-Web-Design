//Here we wil establish our hasScrolled function, this will allow the fixed header to shrink on scroll, making an easier and more enjoyable viewing pleaseure.
window.onscroll = hasScrolled;

//this function will call the pageYOffset option to see if it is at the top of the page or not.
function topOfPage() {
	if (window.pageYOffset >= 0) {
		return window.pageYOffset;
	}
}

//This function can tell if the page has been scrolled yet and if so display certain styles
function hasScrolled() {
	var scroll = topOfPage();
	if (scroll > 1) {
		document.getElementById("header").style.padding = "0 30px"; // This style option will shrink the header
		document.getElementById("header").style.boxShadow = "0 0 5px 0 #ccc"; // THis style option will create a shadow at the bottom of the header to give a sense of a layered website
		document.getElementById("header").style.background = "rgba(255,255,255,.98)"; // This style option will make the header transparent just enough to see a little through it
		
	}
	else if (scroll < 1) {
		document.getElementById("header").style.padding = "15px 30px"; // this style option is here if the page hasent been scrolled yet, or if you go back to the top of the page.
        document.getElementById("header").style.boxShadow = "0 0 0 0 #ccc"; // This is to reset the box shadow style on the header
        
	}
}