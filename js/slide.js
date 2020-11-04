let i = 0;
const images = [];
const text = [];
const timeout = 3000;

const imageElement = document.getElementById("slidePlaceholder");
const textElement = document.getElementById("slideText");

images[0] = "./images/slide1.png";
text[0] = "You have a lot of boxes that need to be moved ? ? ?";

images[1] = "./images/slide2.png";
text[1] = "What should you do ? ? ?";

images[2] = "./images/slide3.png";
text[2] =
  "Don't worry, we are here to help you with all kind of transport needs!";

images[3] = "./images/slide4.png";
text[3] = "Whit our big van, we can transport everything!";

images[4] = "./images/slide5.png";
text[4] = "Call us, we are ready to work for you!";

function slider() {
  imageElement.style.backgroundImage = "url(" + images[i] + ")";
  imageElement.style.maxHeight = "100%";
  console.log(imageElement);
  textElement.textContent = text[i];
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

console.log(textElement.style);

window.onload = slider;
