let thisTestIndex = getStorage("thisTestIndex");
let backBtn = getElem(".btn__back");
let nextBtn = getElem(".btn__next");
let finishBtn = getElem(".finish__btn");
let questNum = getElem(".question__number");
let homeBtn=getElem(".nav__item");
let result = getElem(".result");
let yourScore=getElem(".score__res");
let yourTime=getElem(".time__res");
homeBtn.onclick=function(){
  setToStorage("showMyTests",false);

}
let questionContainer = getElem(".question__container");
let test = new Test(tests[thisTestIndex], thisTestIndex);
hide(result);

test.createAllQuestions();
test.createdQuestions[test.currentQuestionIndex].isShown = true;
showQuestNumber();

for (let i = 0; i < test.createdQuestions.length; i++) {
  questionContainer.appendChild(test.createdQuestions[i].html);
  if (test.createdQuestions[i].isShown == false) {
    hide(test.createdQuestions[i].html);
  }
}

backBtn.onclick = function() {
  if (test.currentQuestionIndex - 1 < 0) {
    return true;
  } else {
    hide(test.createdQuestions[test.currentQuestionIndex].html);
    test.createdQuestions[test.currentQuestionIndex].isShown = false;
    show(test.createdQuestions[test.currentQuestionIndex - 1].html);
    test.createdQuestions[test.currentQuestionIndex - 1].isShown = true;
    test.currentQuestionIndex--;
    showQuestNumber();
  }
};

nextBtn.onclick = function() {
  if (test.currentQuestionIndex + 1 == test.createdQuestions.length) {
    return true;
  } else {
    hide(test.createdQuestions[test.currentQuestionIndex].html);

    test.createdQuestions[test.currentQuestionIndex].isShown = false;
    show(test.createdQuestions[test.currentQuestionIndex + 1].html);
    test.createdQuestions[test.currentQuestionIndex + 1].isShown = true;

    test.currentQuestionIndex++;
    showQuestNumber();
  }
};

finishBtn.onclick = function() {
  finishTest();
  show(result);

  console.log("finish");
  test.finalScore = test.currentPoints;
  test.timeSpent = Math.floor(allSec / 60);
  let user = getStorage("currentUser");
  user.completedTests.push(test);
  setToStorage("currentUser", user);
  let score = document.createTextNode(`Your score is ${test.finalScore}.`);
  yourScore.appendChild(score);
  let time = document.createTextNode(`You spent ${test.timeSpent} minutes.`);
  yourTime.appendChild(time);

  let all = getStorage("AllUsers");
  all.forEach(u => {
    if (u.username == user.username) {
      u.completedTests.push(test);
    }
  });

  setToStorage("AllUsers", all);
};

function showQuestNumber() {
  let questNumText = document.createTextNode(
    `Question ${test.currentQuestionIndex + 1}/${test.createdQuestions.length}`
  );
  questNum.innerHTML = "";
  questNum.appendChild(questNumText);
}
