const elements = [];
elements[0] = document.getElementById("textAbout");
elements[1] = document.getElementById("textContact");
elements[2] = document.getElementById("aboutUsP");
elements[3] = document.getElementById("contactFunOne");
elements[4] = document.getElementById("contactFunTwo");
elements[5] = document.getElementById("facePar");
elements[6] = document.getElementById("instaPar");

const engText = [];
engText[0] = "About";
engText[1] = "Contact";
engText[2] =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quiautem voluptates nostrum eveniet asperiores vitae fuga illum provident amet perspiciatis natus unde, repellat sit? Vitae modi aliquid fugiat odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, deleniti maiores. Ad in exercitationem odio, tenetur recusandae est mollitia aliquid. Excepturi temporibus cum tempora amet? Voluptas ab laudantium odit? Consequatur.";
engText[3] = "Owner";
engText[4] = "Employee";
engText[5] = "Follow us on Facebook";
engText[6] = "Follow us on Instagram";

const srbText = [];
srbText[0] = "O nama";
srbText[1] = "Kontakt";
srbText[2] =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quiautem voluptates nostrum eveniet asperiores vitae fuga illum provident amet perspiciatis natus unde, repellat sit? Vitae modi aliquid fugiat odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, deleniti maiores. Ad in exercitationem odio, tenetur recusandae est mollitia aliquid. Excepturi temporibus cum tempora amet? Voluptas ab laudantium odit? Consequatur.";
srbText[3] = "Vlasnik";
srbText[4] = "Radnik";
srbText[5] = "Zaprati nas na Facebook-u";
srbText[6] = "Zaprati nas na Instagram-u";

function setEng() {
  if (!isEng) {
    let i = 0;
    isEng = true;
    elements.forEach((element) => {
      element.textContent = engText[i++];
    });
  }
}

function setSrb() {
  if (isEng) {
    let i = 0;
    isEng = false;
    elements.forEach((element) => {
      element.textContent = srbText[i++];
    });
  }
}
