function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	// prompt wouldn't be used IRL

	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);
	// Turns age into integer

	if (age >=18) {
	// Conditional statement
		console.log('User is an adult');

	} else if (age >=13) {

		console.log('User is a teenager');

	} else {

		console.log('User is a child');

	}

	if (firstName.toLowerCase().trim() === 'general' && lastName.toLowerCase().trim() !== 'assembly') {	
		console.log ('Hi General');
		// alternative below
		// if (firstName === 'General' {
		// if (lastName !== 'Assembly') {
		// 	console.log ('Hi General');
	}
}


// alert($);
// $ is short way of saying 'jquery'. $ is the 'arguement'

// When the page has loaded
$(function() {
	// ask questions when user clicks on image
	$('img').on('click', askQuestions);
	//When the user clicks an h3
	$('h3').on('click',function() {

		//Toggle the next element & durations in ms
		$(this).next().slideToggle(250);
		//This refers to what the user has clicked on at the instant in time

	});




})