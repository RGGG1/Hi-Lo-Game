// button a

var slidesa = document.querySelectorAll('#slidesa .slidea');
var currentSlidea = 0;
var slideIntervala = setInterval(nextSlidea,250);


function nextSlidea(){
	slidesa[currentSlidea].className = 'slidea';
	currentSlidea = (currentSlidea+Math.floor(Math.random() * slidesa.length))%slidesa.length;
	slidesa[currentSlidea].className = 'slidea showing';
}

var playinga = true;
var pauseButtona = document.getElementById('pausea');

function pauseSlideshowa(){
    
    
	playinga = false;
	clearInterval(slideIntervala);
    console.log(currentSlidea);
    
    if (currentSlidea === 0) {
        alert("BANANA");
        incrementScore();
    } if (currentSlidea === 1) {
        alert("BANANA");
        incrementScore();
    }
     else {
        alert(`Uh-oh! MONKEY!`);
        decrementWrongAnswer();
    }
    
    setTimeout(
        function playSlideshowa(){
            playinga = true;
            slideIntervala = setInterval(nextSlidea,250);
        }, 250);
}

pauseButtona.onclick = function a(){
	if(playinga){ pauseSlideshowa(); }
	else{ playSlideshowa(); }
    
};


// button b

var slidesb = document.querySelectorAll('#slidesb .slideb');
var currentSlideb = 0;
var slideIntervalb = setInterval(nextSlideb,250);


function nextSlideb(){
	slidesb[currentSlideb].className = 'slideb';
	currentSlideb = (currentSlideb+Math.floor(Math.random() * slidesb.length))%slidesb.length;
	slidesb[currentSlideb].className = 'slideb showing';
}

var playingb = true;
var pauseButtonb = document.getElementById('pauseb');

function pauseSlideshowb(){
    
    
	playingb = false;
	clearInterval(slideIntervalb);
    console.log(currentSlideb);
    
    if (currentSlideb === 0) {
        alert("BANANA");
        incrementScore();
    } if (currentSlideb === 1) {
        alert("BANANA");
        incrementScore();
    }
     else {
        alert(`Uh-oh! MONKEY!`);
        decrementWrongAnswer();
    }
    
    setTimeout(
        function playSlideshowb(){
            playingb = true;
            slideIntervalb = setInterval(nextSlideb,250);
        }, 250);
}

pauseButtonb.onclick = function b(){
	if(playingb){ pauseSlideshowb(); }
	else{ playSlideshowb(); }
    
};


// button c

var slidesc = document.querySelectorAll('#slidesc .slidec');
var currentSlidec = 0;
var slideIntervalc = setInterval(nextSlidec,250);


function nextSlidec(){
	slidesc[currentSlidec].className = 'slidec';
	currentSlidec = (currentSlidec+Math.floor(Math.random() * slidesc.length))%slidesc.length;
	slidesc[currentSlidec].className = 'slidec showing';
}

var playingc = true;
var pauseButtonc = document.getElementById('pausec');

function pauseSlideshowc(){
    
    
	playingc = false;
	clearInterval(slideIntervalc);
    console.log(currentSlidec);
    
    if (currentSlidec === 0) {
        alert("BANANA");
        incrementScore();
    } if (currentSlidec === 1) {
        alert("BANANA");
        incrementScore();
    }
     else {
        alert(`Uh-oh! MONKEY!`);
        decrementWrongAnswer();
    }
    
    setTimeout(
        function playSlideshowc(){
            playingc = true;
            slideIntervalc = setInterval(nextSlidec,250);
        }, 250);
}

pauseButtonc.onclick = function c(){
	if(playingc){ pauseSlideshowc(); }
	else{ playSlideshowc(); }
    
};



// score counter

function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function decrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("monkey-lives").innerText);
    document.getElementById("monkey-lives").innerText = --oldScore;
}


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

