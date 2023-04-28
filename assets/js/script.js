var myelemet = document.getElementById('myimg1'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelemet,myimgs){
  'use stict';
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelemet.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelemet,myimgs);

var myelemet = document.getElementById('myimg2'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelemet,myimgs){
  'use stict';
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelemet.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelemet,myimgs);

var myelemet = document.getElementById('myimg3'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelemet,myimgs){
  'use stict';
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelemet.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelemet,myimgs);


var myelemet = document.getElementById('myimg4'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelemet,myimgs){
  'use stict';
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelemet.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelemet,myimgs);

var myelemet = document.getElementById('myimg5'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelemet,myimgs){
  'use stict';
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelemet.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelemet,myimgs);

var myelemet = document.getElementById('myimg6'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelemet,myimgs){
  'use stict';
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelemet.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelemet,myimgs);


var myelemet = document.getElementById('myimg7'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelemet,myimgs){
  'use stict';
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelemet.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelemet,myimgs);


var myelemet = document.getElementById('myimg8'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelemet,myimgs){
  'use stict';
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelemet.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelemet,myimgs);

var myelemet = document.getElementById('myimg9'),
    myimgs =["/assets/images/banana-yellow.png","/assets/images/monkey-black-white.png","/assets/images/banana-black-white.png","/assets/images/monkey-yellow.png"];
function changeImg(myelemet,myimgs){
  'use stict';
  setInterval(function(){
    var myRandomNum = Math.floor(Math.random() * myimgs.length);

    myelemet.src = myimgs[myRandomNum];
  }, 250);
}
changeImg(myelemet,myimgs);



//
var images = [];

images[0] = ['/assets/images/banana-yellow.png'];
images[1] = ['/assets/images/monkey-black-white.png'];
images[2] = ['/assets/images/banana-black-white.png'];
images[3] = ['/assets/images/monkey-yellow.png'];

var index = 0;

function change() {
  document.getElementById("mainPhoto").src = images[index];
  if (index == 3) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 250);
}

window.onload = change();