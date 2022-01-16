console.log("page loaded...");

var x = document.getElementById("myvideo");

function over() {
  console.log(x);
  x.muted = false;
  x.play();
}

function out() {
  console.log(x);
  x.muted = true;
  x.pause();
}
