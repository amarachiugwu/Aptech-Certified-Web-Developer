var slides = document.querySelectorAll('.slider .slide');
var currentSlide = 0;
var interval = setInterval(nextSlide, 2000);
function nextSlide() {
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'slide');
	currentSlide = (currentSlide + 1)% slides.length;
	slides[currentSlide].setAttribute('class', 'slide show');
}
var over = document.querySelectorAll('.slider .slide');
over.onmouseover = function(){
 alert('pause me');
 console.log(3);
}
