// generating html elements

const staticUFO = document.querySelector(".static.ufo");
const UFOFace = document.querySelector('.ufo-head');
const lights = document.getElementsByClassName('light');
const feet = document.querySelector('.foot');
const shins = document.getElementsByClassName('shin');
const message = document.querySelector('.speech-bubble');

staticUFO.addEventListener("mouseenter", sayDontTouch);
staticUFO.addEventListener("mouseleave", sayNothing);

function sayDontTouch() {
    message.innerHTML = "wait dont touch me";
    UFOFace.innerHTML= "'x'"
    shins[0].style.height="100px";
    shins[1].style.height="100px";
    shins[2].style.height="100px";
    lights[0].style.background = "#ff2e4a";
    lights[1].style.background = "#ff6f00";
    lights[2].style.background = "#ff1e00";
    lights[3].style.background = "#ff00e6";
    UFOFace.style.background = '#FDFF8C';
}

function sayNothing() {
    message.innerHTML = "...";
    UFOFace.innerHTML= "'-'"
    shins[0].style.height="20px";
    shins[1].style.height="20px";
    shins[2].style.height="20px";
    lights[0].style.background = "white";
    lights[1].style.background = "white";
    lights[2].style.background = "white";
    lights[3].style.background = "white";
    UFOFace.style.background= "#abf8d8";
}

staticUFO.addEventListener("click", function () {
    // let randomX = rng(-500,500);
    // let randomY = rng(-500,500);
    // if (this.style.marginTop < 0) {
    //     this.style.marginTop = "50px"
    // } else {
    //     this.style.marginTop += randomX;
    // }
    // if (this.style.marginLeft < 0) {
    //     this.style.marginLeft = "50px"
    // } else {
    //     this.style.marginLeft += randomY;
    // }
    const UFOBuffer = 200;
    let randomX = rng(-1*(window.innerWidth - UFOBuffer), window.innerWidth - UFOBuffer);
    let randomY = rng(20, window.innerHeight - UFOBuffer);
    this.style.marginLeft = `${randomX}px`;
    this.style.marginTop = `${randomY}px`;
    console.log(randomX, this.style.marginLeft, randomY, this.style.marginTop);
});

function rng(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }