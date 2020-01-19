function createTestHTML(textName, textLevel, textSubj, textMin, textSc) {
  let testCont = document.createElement("div");
  testCont.classList.add("test__container");
  let testImg = document.createElement("div");
  testImg.classList.add("test__img");
  let testInfo = document.createElement("div");
  testInfo.classList.add("test__info");
  testInfo.classList.add("jc-center");
  let testWrapper = document.createElement("div");
  testWrapper.classList.add("test__wrapper");
  let wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  let h3 = document.createElement("h3");
  h3.classList.add("test__name");
  let subj = document.createElement("p");
  subj.classList.add("test__subject");
  let level = document.createElement("p");
  level.classList.add("level");
  let time = document.createElement("p");
  time.classList.add("time");
  let score = document.createElement("p");
  score.classList.add("score");

  // btn start
  
  let btnStart = document.createElement("div");
  btnStart.classList.add("btn__start__test");
  let start = document.createTextNode("Start");
  btnStart.appendChild(start);
  let a=document.createElement("a");
  a.setAttribute("href","test.html");
  a.appendChild(btnStart);

  //creating icons

  let subjIcon = document.createElement("i");
  subjIcon.classList.add("fas");
  subjIcon.classList.add("fa-book");

  let levelIcon = document.createElement("i");
  levelIcon.classList.add("far");
  levelIcon.classList.add("fa-chart-bar");

  let timeIcon = document.createElement("i");
  timeIcon.classList.add("far");
  timeIcon.classList.add("fa-clock");

  let scoreIcon = document.createElement("i");
  scoreIcon.classList.add("far");
  scoreIcon.classList.add("fa-star");

  //appending
  let infoArray = [h3, subj, level, time, score, a];
  for (var i = 0; i < infoArray.length; i++) {
    wrapper.appendChild(infoArray[i]);
  }

  level.appendChild(levelIcon);
  subj.appendChild(subjIcon);
  time.appendChild(timeIcon);
  score.appendChild(scoreIcon);

  testCont.appendChild(testWrapper);
  testWrapper.appendChild(testImg);
  testWrapper.appendChild(testInfo);
  testInfo.appendChild(wrapper);

  let teName = document.createTextNode(textName);
  let lvl = document.createTextNode(`Level:${textLevel}`);
  let subjName = document.createTextNode(textSubj);
  let t = document.createTextNode(`${textMin} minutes`);
  let sc = document.createTextNode(textSc);
  h3.appendChild(teName);
  level.appendChild(lvl);
  subj.appendChild(subjName);
  time.appendChild(t);
  score.appendChild(sc);

  return testCont;
}
