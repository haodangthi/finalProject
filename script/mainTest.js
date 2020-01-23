let thisTestIndex = +localStorage.getItem("thisTestIndex");
let backBtn = document.querySelector(".btn__back");
let nextBtn = document.querySelector(".btn__next");

let questionContainer = document.querySelector(".question__container");
let test = new Test(tests[thisTestIndex], thisTestIndex);
test.createAllQuestions();
test.createdQuestions[test.currentQuestionIndex].isShown = true;
//test.createQuestion();
//console.log(test.createdQuestions[test.questionIndex-1].questionIndex);
for (let i = 0; i < test.createdQuestions.length; i++) {
  questionContainer.appendChild(test.createdQuestions[i].html);
  if (test.createdQuestions[i].isShown == false) {
    test.createdQuestions[i].html.style.display = "none";
  }
}

backBtn.onclick = function() {
  if (test.currentQuestionIndex - 1 < 0) {
    return true;
  } else {
    test.createdQuestions[test.currentQuestionIndex].html.style.display =
      "none";
    test.createdQuestions[test.currentQuestionIndex].isShown = false;
    test.createdQuestions[test.currentQuestionIndex - 1].html.style.display =
      "";
    test.createdQuestions[test.currentQuestionIndex - 1].isShown = true;

    test.currentQuestionIndex--;
  }
};
nextBtn.onclick = function() {
  if (test.currentQuestionIndex + 1 == test.createdQuestions.length) {
    return true;
  } else {
    test.createdQuestions[test.currentQuestionIndex].html.style.display =
      "none";
    test.createdQuestions[test.currentQuestionIndex].isShown = false;
    test.createdQuestions[test.currentQuestionIndex + 1].html.style.display =
      "";
    test.createdQuestions[test.currentQuestionIndex + 1].isShown = true;

    test.currentQuestionIndex++;
  }
};
