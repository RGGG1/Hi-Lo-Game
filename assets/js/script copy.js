



var myelement = document.getElementById('myimg1'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
    function changeImg(myelement,myimgs){
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);
    myelement.src = myimgs[myRandomNum];
      }, 250);
    
}
changeImg(myelement,myimgs);

function pause() {
    clearInterval(myimgs);
  }




var myelement = document.getElementById('myimg2'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelement,myimgs){
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelement.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelement,myimgs);

var myelement = document.getElementById('myimg3'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelement,myimgs){
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelement.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelement,myimgs);


var myelement = document.getElementById('myimg4'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelement,myimgs){
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelement.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelement,myimgs);

var myelement = document.getElementById('myimg5'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelement,myimgs){
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelement.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelement,myimgs);

var myelement = document.getElementById('myimg6'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelement,myimgs){
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelement.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelement,myimgs);


var myelement = document.getElementById('myimg7'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelement,myimgs){
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelement.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelement,myimgs);


var myelement = document.getElementById('myimg8'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelement,myimgs){
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelement.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelement,myimgs);

var myelement = document.getElementById('myimg9'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelement,myimgs){
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelement.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelement,myimgs);



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

