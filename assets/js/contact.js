//The main reason we went with these sets of functions to validate the HTML Forms was because of the easy notifications it provides for the end user.


//The first and only function we set is function validateForm. It first sets a form variable based on the field we want, and checks for a value. If there is a value, it does nothing, and submits the information. If there is not any text in the field, it will display CSS elements that notify the user what is wrong. Once the required fields are complete, the form will submit.

//the very intuite and beautiful effect about this contact form is the fact that there is error codes. We simply have the error codes already in the html, but they are not displayed. If the field doesnt have any information it will change the element style to display:block resulting in the gorgeous errors :)
function validateForm() {
	var a = document.forms["contactform"]["fname"].value;
	if (a === null || a === "") {
		document.getElementById("error-fname").style.display = "block";
		return false;
	}
	var b = document.forms["contactform"]["lname"].value;
	if (b === null || b === "") {
		document.getElementById("error-lname").style.display = "block";
		return false;
	}
	var c = document.forms["contactform"]["email"].value;
	if (c === null || c === "") {
		document.getElementById("error-email").style.display = "block";
		return false;
	}
	var d = document.forms["contactform"]["subject"].value;
	if (d === null || d === "") {
		document.getElementById("error-subject").style.display = "block";
		return false;
	}
	var e = document.forms["contactform"]["message"].value;
	if (e === null || e === "") {
		document.getElementById("error-message").style.display = "block";
		return false;
	}
}
