var interval;
var timeout;
var sessionLength;
var breakLength;
var timeLeft;
var isSession;
var timerRunning;
var endTime;
var msLeft;
var minutes;
var seconds;

const time_left = document.getElementById("time-left");
const start_stop = document.querySelector("#start_stop");
const break_increment = document.getElementById("break-increment");
const break_decrement = document.getElementById("break-decrement");
const session_increment = document.getElementById("session-increment");
const session_decrement = document.getElementById("session-decrement");
const reset = document.querySelector("#reset");
const break_length = document.querySelector("#break-length");
const session_length = document.querySelector("#session-length");
const timer_label = document.querySelector("#timer-label");
const alarm = document.getElementById("beep");

start_stop.addEventListener("click", function () {

});


break_increment.addEventListener("click", function () {

});

break_decrement.addEventListener("click", function () {

});

session_increment.addEventListener("click", function () {

});

session_decrement.addEventListener("click", function () {

});

reset.addEventListener("click", function () {

});

function startTimer() {

  start_stop.innerHTML = "<i class='fas fa-pause'></i>"
  timerRunning = true

  interval = setInterval(timer, 1000);

}

function timer() {

  timeLeft = endTime

  minutes = Math.floor(endTime / 1000 / 60);

  seconds = endTime / 1000 % 60;
  updateDisplay(minutes, seconds)

  endTime = endTime - 1000;
  if (endTime < 0) {
    clearInterval(interval)


    alarm.play();
    if (isSession) {

      endTime = breakLength * 60 * 1000

    } else {

      endTime = sessionLength * 60 * 1000

    }

    startTimer()
    isSession = !isSession
  }

}