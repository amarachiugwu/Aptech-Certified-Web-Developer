var slides = document.querySelectorAll('.slider .slide');
var currentSlide = 0;
var	interval = setInterval(nextSlide, 2000);

function nextSlide() {
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'slide');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].setAttribute('class', 'slide show');
}

var playing = true;

var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

prevBtn.onclick = function(){
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'slide');
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	slides[currentSlide].setAttribute('class', 'slide show');
}

nextBtn.onclick = function(){
	pauseSlide();
	nextSlide();
}

var slidesContainer = document.querySelector('.slider');
slidesContainer.onmouseover = function(){
	pauseSlide();
}

function pauseSlide(){
	if(playing){
		clearInterval(interval);
		playing = false;
	}
}

function playSlide() {
	if(playing == false){
		interval =setInterval(nextSlide, 2000);
		playing = true;
	}
}

slidesContainer.onmouseleave = function(){
	playSlide();
	playing = true;
}
