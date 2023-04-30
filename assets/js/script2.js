



var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2500);

var myRandomNum = Math.floor(Math.random() * slides.length);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+Math.floor(Math.random() * slides.length))%slides.length;
	slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	playing = false;
	clearInterval(slideInterval);
    console.log(currentSlide);
}

function playSlideshow(){
	playing = true;
	slideInterval = setInterval(nextSlide,2500);
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};