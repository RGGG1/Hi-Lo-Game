// Mute audio

function muteMe(elem) {
    
    elem.muted = true;
    elem.pause();
}

// Try to mute all video and audio elements on the page
function mutePage() {
    var elems = document.querySelectorAll("audio");
    const object = document.getElementById('mute');

    [].forEach.call(elems, function(elem) { muteMe(elem); }); 
    
    object.classList.toggle('muted');
        if (elem.muted === true) {
            elem.muted = false;
        }
        else if (elem.muted === false) {
            elem.muted = true;
        }
    }
    


// Hide / reveal functions - Start button

function start() {  
    var x = document.getElementById("box");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    var x = document.getElementById("box2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var x = document.getElementById("start");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

// score counter

function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    


}

function decrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("monkeylives").innerText);
    document.getElementById("monkeylives").innerText = --oldScore;

    
   
}

/* Speed

function incrementSpeed() {

    let oldSpeed = parseInt(document.getElementById("speed").innerText);
    if (oldSpeed > "10") {
        document.getElementById("speed").innerText = oldSpeed += 100;
        
    } else {
            }
    
    
}

*/



// Game Over - show / hide screen

function decrementLives() {
    let oldLives = parseInt(document.getElementById("lives").innerText);
    if (oldLives == "1") {
        document.getElementById("lives").innerText = --oldLives;
        box.style.display = "none";
        over.style.display = "block";
        
    } else {
        document.getElementById("lives").innerText = --oldLives;
    }
}

// Game Over - results screen
function incrementResult() {
        let oldResult = parseInt(document.getElementById("result").innerText);
        if (oldResult == "0") {
            document.getElementById("result").innerText = ++oldResult + "\nbanana";
        } else {
            document.getElementById("result").innerText = ++oldResult + "\nbananas";
        }
    }


// Game over - Play Again - Not perfect, as brings to start screen instead of straight into a new game

function gamerestart() {
        window.location.reload();
}


/* this function might work for game restart, if adjusted a bit, but the problem is the original game over functions don't restart.

    var span = document.getElementById("monkeylives");
    
 
    function gfg_Run() {
        monkeylives.textContent = "33";
        box.style.display = "block";
        over.style.display = "none";
    }
*/



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
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtona.classList.add('animate__animated', 'animate__backOutUp');
    } if (currentSlidea === 1) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtona.classList.add('animate__animated', 'animate__backOutUp');
        } if (currentSlidea === 2) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtona.classList.add('animate__animated', 'animate__backOutDown');
    } if (currentSlidea === 3) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtona.classList.add('animate__animated', 'animate__backOutDown');
    } else {
    }
    
    
    setTimeout(
        function playSlideshowa(){
            playinga = true;            
            pauseButtona.classList.remove('animate__animated', 'animate__backOutDown', 'animate__backOutUp');
            slideIntervala = setInterval(nextSlidea,250);
        }, 2500);
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
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtonb.classList.add('animate__animated', 'animate__backOutUp');
    } if (currentSlideb === 1) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtonb.classList.add('animate__animated', 'animate__backOutUp');
        } if (currentSlideb === 2) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtonb.classList.add('animate__animated', 'animate__backOutDown');
    } if (currentSlideb === 3) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtonb.classList.add('animate__animated', 'animate__backOutDown');
    } else {
    }
    
    
    setTimeout(
        function playSlideshowb(){
            playingb = true;            
            pauseButtonb.classList.remove('animate__animated', 'animate__backOutDown', 'animate__backOutUp');
            slideIntervalb = setInterval(nextSlideb,250);
        }, 2500);
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
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtonc.classList.add('animate__animated', 'animate__backOutUp');
    } if (currentSlidec === 1) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtonc.classList.add('animate__animated', 'animate__backOutUp');
        } if (currentSlidec === 2) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtonc.classList.add('animate__animated', 'animate__backOutDown');
    } if (currentSlidec === 3) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtonc.classList.add('animate__animated', 'animate__backOutDown');
    } else {
    }
    
    
    setTimeout(
        function playSlideshowc(){
            playingc = true;            
            pauseButtonc.classList.remove('animate__animated', 'animate__backOutDown', 'animate__backOutUp');
            slideIntervalc = setInterval(nextSlidec,250);
        }, 2500);
}



pauseButtonc.onclick = function c(){
	if(playingc){ pauseSlideshowc(); }
	else{ playSlideshowc(); }
    
};




// button d

var slidesd = document.querySelectorAll('#slidesd .slided');
var currentSlided = 0;
var slideIntervald = setInterval(nextSlided,250);


function nextSlided(){
	slidesd[currentSlided].className = 'slided';
	currentSlided = (currentSlided+Math.floor(Math.random() * slidesd.length))%slidesd.length;
	slidesd[currentSlided].className = 'slided showing';
}

var playingd = true;
var pauseButtond = document.getElementById('paused');

function pauseSlideshowd(){
    
    
	playingd = false;
	clearInterval(slideIntervald);
    console.log(currentSlided);
    
    if (currentSlided === 0) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtond.classList.add('animate__animated', 'animate__backOutUp');
    } if (currentSlided === 1) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtond.classList.add('animate__animated', 'animate__backOutUp');
        } if (currentSlided === 2) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtond.classList.add('animate__animated', 'animate__backOutDown');
    } if (currentSlided === 3) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtond.classList.add('animate__animated', 'animate__backOutDown');
    } else {
    }
    
    
    setTimeout(
        function playSlideshowd(){
            playingd = true;            
            pauseButtond.classList.remove('animate__animated', 'animate__backOutDown', 'animate__backOutUp');
            slideIntervald = setInterval(nextSlided,250);
        }, 2500);
}



pauseButtond.onclick = function d(){
	if(playingd){ pauseSlideshowd(); }
	else{ playSlideshowd(); }
    
};




// button e

var slidese = document.querySelectorAll('#slidese .slidee');
var currentSlidee = 0;
var slideIntervale = setInterval(nextSlidee,250);


function nextSlidee(){
	slidese[currentSlidee].className = 'slidee';
	currentSlidee = (currentSlidee+Math.floor(Math.random() * slidese.length))%slidese.length;
	slidese[currentSlidee].className = 'slidee showing';
}

var playinge = true;
var pauseButtone = document.getElementById('pausee');

function pauseSlideshowe(){
    
    
	playinge = false;
	clearInterval(slideIntervale);
    console.log(currentSlidee);
    
    if (currentSlidee === 0) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtone.classList.add('animate__animated', 'animate__backOutUp');
    } if (currentSlidee === 1) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtone.classList.add('animate__animated', 'animate__backOutUp');
        } if (currentSlidee === 2) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtone.classList.add('animate__animated', 'animate__backOutDown');
    } if (currentSlidee === 3) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtone.classList.add('animate__animated', 'animate__backOutDown');
    } else {
    }
    
    
    setTimeout(
        function playSlideshowe(){
            playinge = true;            
            pauseButtone.classList.remove('animate__animated', 'animate__backOutDown', 'animate__backOutUp');
            slideIntervale = setInterval(nextSlidee,250);
        }, 2500);
}


pauseButtone.onclick = function e(){
	if(playinge){ pauseSlideshowe(); }
	else{ playSlideshowe(); }
    
};




// button f

var slidesf = document.querySelectorAll('#slidesf .slidef');
var currentSlidef = 0;
var slideIntervalf = setInterval(nextSlidef,250);


function nextSlidef(){
	slidesf[currentSlidef].className = 'slidef';
	currentSlidef = (currentSlidef+Math.floor(Math.random() * slidesf.length))%slidesf.length;
	slidesf[currentSlidef].className = 'slidef showing';
}

var playingf = true;
var pauseButtonf = document.getElementById('pausef');

function pauseSlideshowf(){
    
    
	playingf = false;
	clearInterval(slideIntervalf);
    console.log(currentSlidef);
    
    if (currentSlidef === 0) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtonf.classList.add('animate__animated', 'animate__backOutUp');
    } if (currentSlidef === 1) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtonf.classList.add('animate__animated', 'animate__backOutUp');
        } if (currentSlidef === 2) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtonf.classList.add('animate__animated', 'animate__backOutDown');
    } if (currentSlidef === 3) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtonf.classList.add('animate__animated', 'animate__backOutDown');
    } else {
    }
    
    
    setTimeout(
        function playSlideshowf(){
            playingf = true;            
            pauseButtonf.classList.remove('animate__animated', 'animate__backOutDown', 'animate__backOutUp');
            slideIntervalf = setInterval(nextSlidef,250);
        }, 2500);
}



pauseButtonf.onclick = function f(){
	if(playingf){ pauseSlideshowf(); }
	else{ playSlideshowf(); }
    
};




// button g

var slidesg = document.querySelectorAll('#slidesg .slideg');
var currentSlideg = 0;
var slideIntervalg = setInterval(nextSlideg,250);


function nextSlideg(){
	slidesg[currentSlideg].className = 'slideg';
	currentSlideg = (currentSlideg+Math.floor(Math.random() * slidesg.length))%slidesg.length;
	slidesg[currentSlideg].className = 'slideg showing';
}

var playingg = true;
var pauseButtong = document.getElementById('pauseg');

function pauseSlideshowg(){
    
    
	playingg = false;
	clearInterval(slideIntervalg);
    console.log(currentSlideg);
    
    if (currentSlideg === 0) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtong.classList.add('animate__animated', 'animate__backOutUp');
    } if (currentSlideg === 1) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtong.classList.add('animate__animated', 'animate__backOutUp');
        } if (currentSlideg === 2) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtong.classList.add('animate__animated', 'animate__backOutDown');
    } if (currentSlideg === 3) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtong.classList.add('animate__animated', 'animate__backOutDown');
    } else {
    }
    
    
    setTimeout(
        function playSlideshowg(){
            playingg = true;            
            pauseButtong.classList.remove('animate__animated', 'animate__backOutDown', 'animate__backOutUp');
            slideIntervalg = setInterval(nextSlideg,250);
        }, 2500);
}



pauseButtong.onclick = function g(){
	if(playingg){ pauseSlideshowg(); }
	else{ playSlideshowg(); }
    
};




// button h

var slidesh = document.querySelectorAll('#slidesh .slideh');
var currentSlideh = 0;
var slideIntervalh = setInterval(nextSlideh,250);


function nextSlideh(){
	slidesh[currentSlideh].className = 'slideh';
	currentSlideh = (currentSlideh+Math.floor(Math.random() * slidesh.length))%slidesh.length;
	slidesh[currentSlideh].className = 'slideh showing';
}

var playingh = true;
var pauseButtonh = document.getElementById('pauseh');

function pauseSlideshowh(){
    
    
	playingh = false;
	clearInterval(slideIntervalh);
    console.log(currentSlideh);
    
    if (currentSlideh === 0) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtonh.classList.add('animate__animated', 'animate__backOutUp');
    } if (currentSlideh === 1) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtonh.classList.add('animate__animated', 'animate__backOutUp');
        } if (currentSlideh === 2) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtonh.classList.add('animate__animated', 'animate__backOutDown');
    } if (currentSlideh === 3) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtonh.classList.add('animate__animated', 'animate__backOutDown');
    } else {
    }
    
    
    setTimeout(
        function playSlideshowh(){
            playingh = true;            
            pauseButtonh.classList.remove('animate__animated', 'animate__backOutDown', 'animate__backOutUp');
            slideIntervalh = setInterval(nextSlideh,250);
        }, 2500);
}


pauseButtonh.onclick = function h(){
	if(playingh){ pauseSlideshowh(); }
	else{ playSlideshowh(); }
    
};




// button i

var slidesi = document.querySelectorAll('#slidesi .slidei');
var currentSlidei = 0;
var slideIntervali = setInterval(nextSlidei,250);


function nextSlidei(){
	slidesi[currentSlidei].className = 'slidei';
	currentSlidei = (currentSlidei+Math.floor(Math.random() * slidesi.length))%slidesi.length;
	slidesi[currentSlidei].className = 'slidei showing';
}



var playingi = true;
var pauseButtoni = document.getElementById('pausei');

function pauseSlideshowi(){
    
    
	playingi = false;
	clearInterval(slideIntervali);
    console.log(currentSlidei);
    
    if (currentSlidei === 0) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtoni.classList.add('animate__animated', 'animate__backOutUp');
    } if (currentSlidei === 1) {        
        document.getElementById('yip').play();
        incrementScore();
        incrementResult();
        pauseButtoni.classList.add('animate__animated', 'animate__backOutUp');
        } if (currentSlidei === 2) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtoni.classList.add('animate__animated', 'animate__backOutDown');
    } if (currentSlidei === 3) {        
        document.getElementById('monkey').play();
        decrementWrongAnswer();
        decrementLives();
        pauseButtoni.classList.add('animate__animated', 'animate__backOutDown');
    } else {
    }
    
    
    setTimeout(
        function playSlideshowi(){
            playingi = true;            
            pauseButtoni.classList.remove('animate__animated', 'animate__backOutDown', 'animate__backOutUp');
            slideIntervali = setInterval(nextSlidei,250);
        }, 2500);
}


pauseButtoni.onclick = function i(){
	if(playingi){ pauseSlideshowi(); }
	else{ playSlideshowi(); }
    
};






