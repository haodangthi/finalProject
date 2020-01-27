var timer = getElem(".timer");
var startBtn = getElem("#startBtn");
var dateNow = getElem(".dateNow");
var timerFunc;
var startTime;
var startSec;
var startMin;

let allSec;
let givenTime = getStorage("thisTestTime");//+localStorage.getItem("thisTestTime");
let seconds = document.createTextNode("00");
let hours = document.createTextNode(`0${Math.floor(givenTime / 60)}`);
let minutes;
let shownMin = getElem(".minutes");
let shownSec = getElem(".seconds");
let shownHours = getElem(".hours");

let container=getElem(".questions__container");
hide(container);

if (givenTime % 60 < 10) {
  minutes = document.createTextNode(`0${givenTime % 60}`);
} else {
  minutes = document.createTextNode(`${givenTime % 60}`);
}



shownMin.appendChild(minutes);
shownSec.appendChild(seconds);
shownHours.appendChild(hours);


startBtn.onclick = function() {
  hideBanner();
  startTime = new Date();
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
    if (allSec + 1 == givenTime * 60) {
      // +1, в начале отнимала
      finishTest();
      show(result);
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

function finishTest() {
  clearInterval(timerFunc);
  hide(container);
}


function hideBanner(){
  let banner= document.querySelector(".banner");
  hide(banner);
  show(container);//question container
}  