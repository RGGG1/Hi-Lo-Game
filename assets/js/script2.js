function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function decrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("monkey-lives").innerText);
    document.getElementById("monkey-lives").innerText = --oldScore;
}


//

  

var slides = document.querySelectorAll('#box2 .box');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,500);


function nextSlide(){
	slides[currentSlide].className = 'box';
	currentSlide = (currentSlide+Math.floor(Math.random() * slides.length))%slides.length;
	slides[currentSlide].className = 'box showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    
    
	playing = false;
	clearInterval(slideInterval);
    console.log(currentSlide);
    
    if (currentSlide === 0) {
        alert("BANANA");
        incrementScore();
    } if (currentSlide === 1) {
        alert("BANANA");
        incrementScore();
    }
     else {
        alert(`Uh-oh! MONKEY!`);
        decrementWrongAnswer();
    }
    
    setTimeout(
        function playSlideshow(){
            playing = true;
            slideInterval = setInterval(nextSlide,500);
        }, 500);
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

    function incrementScore() {

        let oldScore = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++oldScore;
    
    }
    
    function decrementWrongAnswer() {
    
        let oldScore = parseInt(document.getElementById("monkey-lives").innerText);
        document.getElementById("monkey-lives").innerText = --oldScore;
    }
    
    
    //
    
      
    
    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,250);
    
    
    function nextSlide(){
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+Math.floor(Math.random() * slides.length))%slides.length;
        slides[currentSlide].className = 'slide showing';
    }
    
    var playing = true;
    var pauseButton = document.getElementById('pause2');
    
    function pauseSlideshow(){
        
        
        playing = false;
        clearInterval(slideInterval);
        console.log(currentSlide);
        
        if (currentSlide === 0) {
            alert("BANANA");
            incrementScore();
        } if (currentSlide === 1) {
            alert("BANANA");
            incrementScore();
        }
         else {
            alert(`Uh-oh! MONKEY!`);
            decrementWrongAnswer();
        }
        
        setTimeout(
            function playSlideshow(){
                playing = true;
                slideInterval = setInterval(nextSlide,250);
            }, 250);
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
    
    