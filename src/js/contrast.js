//- @codekit-prepend 'jquery.js'

$( document ).ready(function() {

	// plugin 
	const htmlEl = document.documentElement, outputExample = document.getElementById('output');
	let savedTheme = 'light';

	// Toggle the theme and update their local storage.
	toggleTheme = (bool) => {
	   const theme = bool ? 'light' : 'dark';
	   htmlEl.dataset.theme = theme;
	   // localStorage.setItem('savedTheme', theme);
	   outputExample.innerText = `${theme} theme`;
	}

	// Handle their saved preferred theme.
	setSavedTheme = () => {
	  if (localStorage.getItem('savedTheme') === null) {
	    localStorage.setItem('savedTheme', savedTheme);
	  } else {
	    savedTheme = localStorage.getItem('savedTheme');
	  }
	  htmlEl.dataset.theme = savedTheme;
	  outputExample.innerText = `${savedTheme} theme`;
	}

	// Set the default.
	setSavedTheme();

	

	// dynamic copyright in the footer
	var now = new Date();
	var year = now.getFullYear();
	$('.copyright').text('©'+year);

	var dateObj = new Date();
	var month = dateObj.getUTCMonth() + 1; //months from 1-12
	var day = dateObj.getUTCDate();
	var year = dateObj.getUTCFullYear();

	newdate = day + " " + GetMonthName(month) + ", " + year;
	newdatePlusYear = day + " " + GetMonthName(month) + ", " + (year+1);

	function GetMonthName(monthNumber) {
			var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			return months[monthNumber - 1];
	}

});






