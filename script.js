let button = document.getElementsByClassName("themeButton");
let mainText = document.getElementsByClassName("mainText");
let box = document.getElementsByClassName("box");
let textCG = document.getElementsByClassName("textCG");

function light() {
  let div = document.getElementById("colorDiv");

  const elements = document.querySelectorAll("*");

  // elements.forEach(element => {
  // element.style.color = 'black';
  // })

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
  }
  div.style.backgroundColor = "transparent";

  let divBox = document.getElementById("heroDiv");
  let navBox = document.getElementById("topNav");

  // divBox.style.cssText = "background-color : rgba(255, 255, 255, 0.289);border-radius:10px";

  navBox.style.cssText =
    "background-color : rgba(255, 255, 255, 0.2); text-shadow:0px 0px 2px white; font-weight:bold;";

  let themeDiv = document.getElementById("themeDiv");
  themeDiv.style.cssText = "border: 2px solid black";

  for (let i = 0; i < mainText.length; i++) {
    mainText[i].style.cssText = "text-shadow: 0px 0px 50px white; color:black";
  }
  document.getElementById("mainDiv3").style.cssText =
    "background-color:rgb(225, 225, 225);";

  document.getElementById("mainDiv2").style.cssText =
    "background-color:rgb(225, 225, 225);background-image: url(images/CG_bg_compressed.png);";

  for (let i = 0; i < box.length; i++) {
    box[i].style.cssText =
      "background-color: transparent;box-shadow: 0px 0px 20px 5px grey; color:black";
  }

  document.getElementById("CGLorem").style.cssText =
    "color:black;text-shadow:0px 0px 15px white";

  document.getElementById("bgVideo").style.mixBlendMode = "normal";

  document.getElementById('lastDiv').style.backgroundColor = 'silver';
}

function dark() {
  const elements = document.querySelectorAll("*");

  elements.forEach((element) => {
    element.style.color = "white";
  });

  document.getElementById("colorDiv").style.backgroundColor =
    "rgba(0, 0, 0, 0.681)";

  let divBox = document.getElementById("heroDiv");
  let navBox = document.getElementById("topNav");

  divBox.style.cssText = "background-color : transparent;";

  topNav.style.cssText = "background-color : rgba(30, 30, 30, 0.196);";

  let themeDiv = document.getElementById("themeDiv");
  themeDiv.style.cssText = "border:2px solid white";

  for (let i = 0; i < mainText.length; i++) {
    mainText[i].style.cssText = "text-shadow: 0px 0px 20px 20px black";
  }

  document.getElementById("mainDiv3").style.cssText =
    "background-color:rgb(36, 36, 36);";

  document.getElementById("mainDiv2").style.cssText =
    "background-color:rgb(36, 36, 36);background-image: url(images/CG_bg_compressed.png);";

  for (let i = 0; i < box.length; i++) {
    box[i].style.cssText =
      "box-shadow: 0px 0px 20px 20px black; background-color:transparent";
  }

  document.getElementById("CGLorem").style.cssText =
    "color:white;text-shadow:0px 0px 25px black";

    document.getElementById('lastDiv').style.backgroundColor = 'goldenrod';
}

function musicPlay() {
  let sound = new Audio("\\music\\bg_music.mp3");
  sound.play();
}
