// var add = document.querySelectorAll("[num]");
// var result = document.querySelector("#display");
// // function press() {

// //   add.innerText = result.vlaue;
// // }

// function press(value) {
//   for (var i = 0; i < add.length; i++) {
//     result[i].innerText = add[i].value;
//   }
// }
var result = 0;
var num1 = "";
var num2 = "";
var ope = "";
var equals = document.querySelector("#equals");
var operations = document.querySelector(".operator");
var display = document.querySelector("#display");
function press(num) {
  if (ope == "") {
    display.innerText = num1 + num;
    num1 = display.innerText;
  } else {
    display.innerText = num2 + num;
    num2 = display.innerText;
  }
}
function setOP(op) {
  display.innerText = op;
  ope = op;
  console.log(ope);
}
function calculate() {
  if (ope == "/") {
    result = parseInt(num1) / parseInt(num2);
  } else if (ope == "+") {
    result = parseInt(num1) + parseInt(num2);
  } else if (ope == "-") {
    result = parseInt(num1) - parseInt(num2);
  } else if (ope == "*") {
    result = parseInt(num1) * parseInt(num2);
  }
  display.innerText = result;
  num1 = result.toString();
  num2 = 0;
  ope = "";
}

function clr() {
  (num1 = 0), (num2 = 0);
  ope = "";
  display.innerText = 0;
}
