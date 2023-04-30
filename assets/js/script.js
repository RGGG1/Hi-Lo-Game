



var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,250);

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
    setTimeout(
        function playSlideshow(){
            playing = true;
            slideInterval = setInterval(nextSlide,250);
        }, 2000);
}

/* disabled the play function, so the user has to wait for it to execute after they pause, in the function above this one.

function playSlideshow(){
	playing = true;
	slideInterval = setInterval(nextSlide,250);
}
*/

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
    
};



// countdown timer

var timeLeft = 5;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    
      }  if (timeLeft == 0) {
        elem.innerHTML = 'Time up!';
        timeLeft--;
    
      } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
      }
    }

    //

