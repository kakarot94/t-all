let i = 0;
const images = [];
const engTextThis = [];
const srbTextThis = [];
const timeout = 3300;
var isEng = true;

const imageElement = document.getElementById("slidePlaceholder");
const textElement = document.getElementById("slideText");

images[0] = "./images/slide1.png";
engTextThis[0] = "You have a lot of boxes that need to be moved???";
srbTextThis[0] = "Imas veliki broj stvari koje treba preneti???";

images[1] = "./images/slide2.png";
engTextThis[1] = "What should you do ?";
srbTextThis[1] = "Sta sada raditi?";

images[2] = "./images/slide3.png";
engTextThis[2] =
  "Don't worry, we are here to help you with all kind of transport needs!";
srbTextThis[2] =
  "Ne brini, mi smo tu da ti pomognemo sa bilo kakvom vrstom transporta!";

images[3] = "./images/slide4.png";
engTextThis[3] = "With our big van, we can transport everything!";
srbTextThis[3] = "Nasim velikim kombijem mozemo preneti sve sto pozelis!";

images[4] = "./images/slide5.png";
engTextThis[4] = "Call us, we are ready to work for you!";
srbTextThis[4] = "Pozovi nas, spremni smo da saradjujemo sa tobom!";

function slider() {
  imageElement.style.backgroundImage = "url(" + images[i] + ")";
  imageElement.style.maxHeight = "100%";
  textElement.textContent = isEng ? engTextThis[i] : srbTextThis[i];
  if (i === 1) {
    textElement.style.fontSize = "35px";
    textElement.style.fontVariant = "small-caps";
    textElement.style.color = "red";
  } else {
    textElement.style.fontSize = "25px";
    textElement.style.fontVariant = "none";
    textElement.style.color = "white";
  }

  if (++i > images.length - 1) {
    i = 0;
  }

  setTimeout("slider()", timeout);
}

window.onload = slider;

function setLang(trueOrFalse) {
  isEng = trueOrFalse;
}
