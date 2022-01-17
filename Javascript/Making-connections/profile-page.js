// var x = document.querySelector("#change");
// var y = "";
// function edit() {
//   x.innerText = var y();
// }

// *********************************************************************************************

var x = document.querySelector("#change");
var y = document.querySelector(".input");

function edit(element) {
  x.innerText = element.value;
  console.log(x);
  console.log(element);
}

function display1(element) {
  y.classList.remove("input");
}

function out(element) {
  y.classList.add("input");
}

// ***************************************************************************************

var pic = document.querySelector(".vanish");
var pic1 = document.querySelector(".vanish1");

function hide() {
  pic.remove();
}

function hide1() {
  pic1.remove();
}
