console.log("page loaded...");

var x = document.getElementById("myvideo");

function playVid() {
  x.play();
}

function pauseVid() {
  x.pause();
}

function over() {
  x.muted = true;
}

function out() {
  x.muted = false;
}
