var timer = document.querySelector(".timer");
var startBtn = document.querySelector("#startBtn");
var dateNow = document.querySelector(".dateNow");
var timerFunc;
var startTime;
var startSec;
var startMin;

let allSec;
let givenTime =+localStorage.getItem("thisTestTime");

let shownMin = document.querySelector(".minutes");
let shownSec = document.querySelector(".seconds");
let shownHours = document.querySelector(".hours");
let minutes;
if (givenTime%60 < 10) {
  minutes = document.createTextNode(`0${givenTime % 60}`);
} else {
  minutes = document.createTextNode(`${givenTime % 60}`);
}

let seconds = document.createTextNode("00");
let hours = document.createTextNode(`0${Math.floor(givenTime / 60)}`);

shownMin.appendChild(minutes);
shownSec.appendChild(seconds);
shownHours.appendChild(hours);
startBtn.onclick = function() {
  startTime = new Date();
  //console.log();

  startMin = startTime.getMinutes();
  startSec = startTime.getSeconds();

   timerFunc = setInterval(() => {
    let currentTime = new Date();
    
    let currentMin = currentTime.getMinutes();
    let currentSec = currentTime.getSeconds();

    let min = getMinPassed(currentMin);

    let givenHours = Math.floor(givenTime / 60);
    let givenMinutes;
    extraMinutes = givenTime % 60;

    allSec = getSecPassed(currentSec, min) - 1; 
    //console.log("allsec",allSec);
    if (extraMinutes <= allSec / 60) {
      givenMinutes = 59;
    } else {
      givenMinutes = extraMinutes - 1;
      givenHours++;
    }
    if (allSec+1 == givenTime * 60) { // +1, в начале отнимала
      
      clearInterval(timerFunc);
    }
    if (givenHours - Math.floor(allSec / 3600) < 10) {
      hours = document.createTextNode(
        `0${givenHours - 1 - Math.floor(allSec / 3600)}`
      );
    } else {
      hours = document.createTextNode(
        `${givenHours - 1 - Math.floor(allSec / 3600)}`
      );
    }
    if (givenMinutes - Math.floor(allSec / 60) <= 10) {
      minutes = document.createTextNode(
        `0${givenMinutes - Math.floor(allSec / 60)}`
      );
    } else {
      minutes = document.createTextNode(
        `${givenMinutes - Math.floor(allSec / 60)}`
      );
    }
    if (60 - (allSec % 60) <= 10) {
      seconds = document.createTextNode(`0${59 - (allSec % 60)}`);
    } else {
      seconds = document.createTextNode(`${59 - (allSec % 60)}`);
    }

    shownMin.innerHTML = "";
    shownSec.innerHTML = "";
    shownHours.innerHTML = "";
    shownMin.appendChild(minutes);
    shownSec.appendChild(seconds);
    shownHours.appendChild(hours);
  }, 1000);
};

function getHoursPassed(allSec) {
  return Math.floor(allSec / 3600);
}
function getMinPassed(currentMin) {
  let minPassed;
  if (currentMin >= startMin) {
    minPassed = currentMin - startMin;
  } else {
    minPassed = 60 - startMin + currentMin;
  }
  return minPassed;
}

function getSecPassed(currentSec, minPassed) {
  //
  let secPassed;
  if (currentSec > startSec) {
    secPassed = currentSec - startSec;
    allSec = minPassed * 60 + secPassed;
  } else {
    secPassed = 60 - startSec + currentSec;
    allSec = (minPassed - 1) * 60 + secPassed;
  }

  return allSec;
}


function finishTest(){
  clearInterval(timerFunc);
  

}