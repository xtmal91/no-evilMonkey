// Javascript for ShyMonkey_JS-Project

var closedFace = document.querySelector(".closed")
var openFace = document.querySelector(".open")
var speakFace = document.querySelector(".speak")

// Add Event Listener
closedFace.addEventListener("click", function() {
	if(openFace.classList.contains("open")) {
		openFace.classList.add("active");
		closedFace.classList.remove("active")
	}
});

openFace.addEventListener("click", function() {
	if(closedFace.classList.contains("closed")) {
		speakFace.classList.add("active");
		openFace.classList.remove("active")
	}
});

speakFace.addEventListener("click", function() {
	if(openFace.classList.contains("open")) {
		closedFace.classList.add("active");
		speakFace.classList.remove("active");
	}
});

