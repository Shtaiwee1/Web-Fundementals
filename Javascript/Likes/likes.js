var likes = document.querySelector("#likes");
var likes1 = document.querySelector("#likes1");
var likes2 = document.querySelector("#likes2");

var count = 9;
var count1 = 12;
var count2 = 9;

function increase() {
  count++;
  likes.innerText = count + "like(s)";
}

function increase1() {
  count1++;
  likes1.innerText = count1 + "like(s)";
}

function increase2() {
  count2++;
  likes2.innerText = count2 + "like(s)";
}
