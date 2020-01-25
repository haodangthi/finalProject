let thisTestIndex = +localStorage.getItem("thisTestIndex");
let backBtn = document.querySelector(".btn__back");
let nextBtn = document.querySelector(".btn__next");
let finishBtn=document.querySelector(".finish__btn");

let questionContainer = document.querySelector(".question__container");
let test = new Test(tests[thisTestIndex], thisTestIndex);
test.createAllQuestions();
test.createdQuestions[test.currentQuestionIndex].isShown = true;



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
    //создать кнопку финиш
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


finishBtn.onclick=function(){
  console.log("finish");
  test.finalScore=test.currentPoints;
  test.timeSpent=Math.floor(allSec/60);
  let user=JSON.parse(localStorage.getItem("currentUser"));
  user.completedTests.push(test);
  localStorage.setItem("currentUser",JSON.stringify(user));
  
  let all=JSON.parse(localStorage.getItem("AllUsers"));
  all.forEach(u=>{
    if (u.username==user.username){
      u.completedTests.push(test);
    }
  });
  localStorage.setItem("AllUsers",JSON.stringify(all));
}