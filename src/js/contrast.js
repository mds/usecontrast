//- @codekit-prepend 'jquery.js'

$( document ).ready(function() {

	const modeSwitcher = document.querySelector(".plugin");
	const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
	const currentMode = localStorage.getItem("mode");

	autoHover = function() {
    $(".line-item").mouseover().delay( 100 );
	}

	// fires only on page load
	if (currentMode == "dark") {
		autoHover();
	  document.body.classList.toggle("dark-mode");
	} else if (currentMode == "light") {
		autoHover();
	  document.body.classList.toggle("light-mode");
	}

	// only fires one of these based on operating system preference
	modeSwitcher.addEventListener("click", function () {
	  if (prefersDarkMode.matches) {
	  	autoHover();
	    document.body.classList.toggle("light-mode");
	    var mode = document.body.classList.contains("light-mode")
	      ? "light"
	      : "dark";
	  } else {
	  	autoHover();
	    document.body.classList.toggle("dark-mode");
	    var mode = document.body.classList.contains("dark-mode")
	      ? "dark"
	      : "light";
	  }
	  localStorage.setItem("mode", mode);
	});

	setLight = function() {
		$('.foreground p').html('foo');
		$('.background p').html('bar');
	}

	setDark = function() {
		$('.foreground p').html('dark');
		$('.background p').html('mode');
	}

});


// $(".foreground p").html("111111");
// $(".background p").html("FFFF00");	





