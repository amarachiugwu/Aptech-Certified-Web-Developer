var slides = document.querySelectorAll('.slider .slide');
var currentSlide = 0;
var interval = setInterval(nextSlide, 2000);

function nextSlide() {
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'slide');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].setAttribute('class', 'slide show');
}

var playing = true;

var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

prevBtn.onclick = function() {
	pauseSlider();
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'slide');
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	slides[currentSlide].setAttribute('class', 'slide show');
}

nextBtn.onclick = function() {
	pauseSlider();
	nextSlide();
}

 function pauseSlider(){
 	if (playing) {
 		clearInterval(interval);
 	}
}
 function playSlider(){
 	if (playing == false) {
 		interval = setInterval(nextSlide, 2000);
 	}
}

var slider = document.querySelector(".slider");


slider.onmouseover = function () {
	pauseSlider();
	playing = false;
}

slider.onmouseleave = function () {
	playSlider();
	playing = true
}


