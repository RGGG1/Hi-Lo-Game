// Hide / reveal functions - Start button

function myFunction() {
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


// Score - Monkey Lives = 0 - Hide Game

function Monkey0() {
    var x = document.getElementById("monkey-lives");
    if (x === "3") {
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

    let oldScore = parseInt(document.getElementById("monkey-lives").innerText);
    document.getElementById("monkey-lives").innerText = --oldScore;

    var x = document.getElementById("box");
    if (oldScore === "3") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



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
    
    if (currentSlidea === 1) {        
        incrementScore();
    } if (currentSlidea === 2) {        
        incrementScore();
    } if (currentSlidea === 3) {        
        decrementWrongAnswer();
    } if (currentSlidea === 0) {        
        decrementWrongAnswer();
    } else {
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
    
    if (currentSlideb === 1) {        
        incrementScore();
    } if (currentSlideb === 2) {        
        incrementScore();
    } if (currentSlideb === 3) {        
        decrementWrongAnswer();
    } if (currentSlideb === 0) {        
        decrementWrongAnswer();
    } else {
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
    
    if (currentSlidec === 1) {        
        incrementScore();
    } if (currentSlidec === 2) {        
        incrementScore();
    } if (currentSlidec === 3) {        
        decrementWrongAnswer();
    } if (currentSlidec === 0) {        
        decrementWrongAnswer();
    } else {
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
    
    if (currentSlided === 1) {        
        incrementScore();
    } if (currentSlided === 2) {        
        incrementScore();
    } if (currentSlided === 3) {        
        decrementWrongAnswer();
    } if (currentSlided === 0) {        
        decrementWrongAnswer();
    } else {
    }
    
    setTimeout(
        function playSlideshowd(){
            playingd = true;
            slideIntervald = setInterval(nextSlided,250);
        }, 250);
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
    
    if (currentSlidee === 1) {        
        incrementScore();
    } if (currentSlidee === 2) {        
        incrementScore();
    } if (currentSlidee === 3) {        
        decrementWrongAnswer();
    } if (currentSlidee === 0) {        
        decrementWrongAnswer();
    } else {
    }
    
    setTimeout(
        function playSlideshowe(){
            playinge = true;
            slideIntervale = setInterval(nextSlidee,250);
        }, 250);
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
    
    if (currentSlidef === 1) {        
        incrementScore();
    } if (currentSlidef === 2) {        
        incrementScore();
    } if (currentSlidef === 3) {        
        decrementWrongAnswer();
    } if (currentSlidef === 0) {        
        decrementWrongAnswer();
    } else {
    }
    
    setTimeout(
        function playSlideshowf(){
            playingf = true;
            slideIntervalf = setInterval(nextSlidef,250);
        }, 250);
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
    
    if (currentSlideg === 1) {        
        incrementScore();
    } if (currentSlideg === 2) {        
        incrementScore();
    } if (currentSlideg === 3) {        
        decrementWrongAnswer();
    } if (currentSlideg === 0) {        
        decrementWrongAnswer();
    } else {
    }
    
    setTimeout(
        function playSlideshowg(){
            playingg = true;
            slideIntervalg = setInterval(nextSlideg,250);
        }, 250);
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
    
    if (currentSlideh === 1) {        
        incrementScore();
    } if (currentSlideh === 2) {        
        incrementScore();
    } if (currentSlideh === 3) {        
        decrementWrongAnswer();
    } if (currentSlideh === 0) {        
        decrementWrongAnswer();
    } else {
    }
    
    setTimeout(
        function playSlideshowh(){
            playingh = true;
            slideIntervalh = setInterval(nextSlideh,250);
        }, 250);
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
    
    if (currentSlidei === 1) {        
        incrementScore();
    } if (currentSlidei === 2) {        
        incrementScore();
    } if (currentSlidei === 3) {        
        decrementWrongAnswer();
    } if (currentSlidei === 0) {        
        decrementWrongAnswer();
    } else {        
    }
    
    setTimeout(
        function playSlideshowi(){
            playingi = true;
            slideIntervali = setInterval(nextSlidei,250);
        }, 250);
}

pauseButtoni.onclick = function i(){
	if(playingi){ pauseSlideshowi(); }
	else{ playSlideshowi(); }
    
};






