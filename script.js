const one = document.getElementById("one");
one.addEventListener("mouseover", mouseHover);
one.addEventListener("mouseout", mouseOut);

const three = document.getElementById("two");
three.addEventListener("mouseover", mouseHover);
three.addEventListener("mouseout", mouseOut);

const two = document.getElementById("maindiv");
two.addEventListener("mouseover", mouseHover);
two.addEventListener("mouseover", special);
two.addEventListener("mouseout", mouseOut);
two.addEventListener("mouseout", maindiv);

function foo() {
  alert("hello world!");
}

function soo() {
  addEventListener("click", special);
}

function mouseHover(e) {
  e.target.style.color = "red";
  e.target.backgroundColor = "green";
}

function mouseOut(e) {
  e.target.style.color = "black";
}
function special(e) {
  e.target.className = "special";
}

function maindiv(e) {
  e.target.className = "maindiv";
}

function changeImage() {
  const img = document.getElementById("img");
  img.src = "img2.webp";
}
function changeImage2() {
  const img2 = document.getElementById("img2");
  img2.src = "img.webp";
}

function changeFont(){
    const font = document.getElementById("div");
    font.style.fontFamily = "Comic Sans MS";
}

function changeColor(){
    const color = document.getElementById("bg");
    color.style.backgroundColor = "White";
}
