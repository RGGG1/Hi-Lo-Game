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