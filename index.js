var seconds = 0;
var tens = 0;
var buttonStart = document.getElementById("btnStart");
var buttonStop = document.getElementById("btnStop");
var buttonReset = document.getElementById("btnReset");
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Interval;

buttonStart.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(Interval);
};

buttonReset.onclick = function () {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
};
