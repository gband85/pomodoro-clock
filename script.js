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

function initializeTimers() {

  alarm.load()
  clearTimeout(timeout)
  clearInterval(interval)

  isSession = true

  timerRunning = false

  sessionLength = 25
  breakLength = 5

  endTime = sessionLength * 60 * 1000
  minutes = Math.floor(endTime / 1000 / 60);

  seconds = endTime / 1000 % 60
  updateDisplay(minutes, seconds)

  break_length.innerHTML = breakLength
  session_length.innerHTML = sessionLength
  start_stop.innerHTML = "<i class='fas fa-play'></i>"

  timer_label.innerHTML = "Session"

}

function updateDisplay(minutesToDisplay, secondsToDisplay) {
  if (minutesToDisplay < 10) {
    minutesToDisplay = "0" + minutesToDisplay
  }
  if (secondsToDisplay < 10) {
    secondsToDisplay = "0" + secondsToDisplay
  }

  if (isSession) {
    timer_label.innerHTML = "Session"

  } else {
    timer_label.innerHTML = "Break"

  }

  time_left.innerHTML = minutesToDisplay + ":" + secondsToDisplay;
}

function changeLength(type, action) {
  if (timerRunning) {

  } else {

    timerRunning = false
    if (type === "session") {
      if (action === "increment") {
        if (sessionLength >= 60) {
          return
        }
        sessionLength += 1
        session_length.innerHTML = sessionLength;

        endTime = sessionLength * 60 * 1000
        if (sessionLength < 10)

          time_left.innerHTML = "0" + sessionLength + ":00"
        else
          time_left.innerHTML = sessionLength + ":00"
      }
      if (action === "decrement") {
        if (sessionLength <= 1) {

          return;
        }

        sessionLength -= 1

        session_length.innerHTML = sessionLength;

        endTime = sessionLength * 60 * 1000

        if (sessionLength < 10)

          time_left.innerHTML = "0" + sessionLength + ":00"
        else
          time_left.innerHTML = sessionLength + ":00"
      }
    }
    if (type === "break") {
      if (action === "increment") {
        if (breakLength >= 60) {
          return;
        }
        breakLength += 1
        break_length.innerHTML = breakLength;

      }
      if (action === "decrement") {
        if (breakLength <= 1) {
          return
        }
        breakLength -= 1
        break_length.innerHTML = breakLength;

      }
    }

  }
}

window.onload = function () {

  initializeTimers();

};