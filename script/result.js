let myTests = getElem(".myTests");
let completedTests = getStorage("currentUser").completedTests;
console.log(completedTests);

if (getStorage("showMyTests")) {
  show(myTests);
}

completedTests.forEach(element => {
  let resContainer = createElem("div", "myTests__container", "", myTests);
  let resWrapper = createElem("div", "myTest__container", "", resContainer);
  let myTestName = createElem(
    "h1",
    "myTest__name",
    `Test name:${element.testName}`,
    resWrapper
  );
  let myScore = createElem(
    "p",
    "myScore",
    `Score: ${element.finalScore}`,
    resWrapper
  );
  let myTimeSpent = createElem(
    "p",
    "myTime",
    `Time spent: ${element.timeSpent} minutes`,
    resWrapper
  );
});
