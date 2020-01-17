var timer = document.querySelector(".timer");
var startBtn = document.querySelector("#startBtn");
var dateNow = document.querySelector(".dateNow");

var startTime;
var startSec;
var startMin;
let allSec;

startBtn.onclick = function() {
  startTime = new Date();
  //console.log();

  startMin = startTime.getMinutes();
  startSec = startTime.getSeconds();
  console.log(startMin);

  console.log(startSec);

  var timerFunc = setInterval(() => {
    var currentTime = new Date();
    console.log();
    var currentMin = currentTime.getMinutes();
    var currentSec = currentTime.getSeconds();
    let min = getMinPassed(currentMin);

    allSec = getSecPassed(currentSec, min);

    timer.innerHTML =
      Math.floor(allSec / 60) +
      "minutes passed " +
      (allSec % 60) +
      " seconds passed ";
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

//dateNow.innerHTML=d.toLocaleTimeString()+" "+startMin+" "+startSec;
