// creating question html

function createQuestionHtml(a1, a2, a3, a4, quest, questionObj, thisTest) {
  let q = document.createElement("div");
  q.classList.add("quesion");
  let quesH1 = document.createElement("h1");
  let quesText = document.createTextNode(quest);
  quesH1.appendChild(quesText);
  
  //text of the question 
  quesH1.setAttribute("data-q", "quest1");
  //ul
  let answList = document.createElement("ul");
  answList.setAttribute("data-ans", "all");

  //btn "NEXT"
  //questionObj.btnNext=createNextBtn(thisTest,questionObj);



  let answers = [a1, a2, a3, a4];
  for (var i = 0; i < 4; i++) {
    let li = document.createElement("li");
    li.setAttribute("data-ans", `${i+1}`);
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", `quest${questionObj.questionIndex}`);
    input.setAttribute("id", `answerCheckbox${questionObj.questionIndex}${i+1}`);
    let label = document.createElement("label");
    label.setAttribute("for", `answerCheckbox${questionObj.questionIndex}${i+1}`);
    

    let answerText = document.createTextNode(answers[i]);
    label.appendChild(answerText);
    li.appendChild(input);
    li.appendChild(label);
    li.onclick = function(e) {
      console.log("click", e.target);
      console.log(questionObj);
      questionObj.usersAnswer = e.target.parentElement.getAttribute("data-ans");
      if (questionObj.answeredCorrectly) {
        if (questionObj.usersAnswer != questionObj.correctAnswer) {
          thisTest.currentPoints--;
          questionObj.answeredCorrectly = false;
        }
      } else {
        if (questionObj.usersAnswer === questionObj.correctAnswer) {
          thisTest.currentPoints++;
          questionObj.answeredCorrectly = true;
        }
      }
    };
    answList.appendChild(li);
    

  }
  q.appendChild(quesH1);
  q.appendChild(answList);
  //q.appendChild(questionObj.btnNext);
  return q;
}

//creates Next button for a 


// function createNextBtn(thisTest,thisQuest) {
//   let btnNext = document.createElement("button");
//   btnNext.classList.add("nextQ");
//   let textBtn = document.createTextNode("Next");
//   btnNext.appendChild(textBtn);
//   btnNext.onclick = function() {
    
//     let nextQuestion = thisTest.createQuestion();
//     document.querySelector(".question__container").appendChild(nextQuestion.html);
//     thisTest.createdQuestions[thisQuest.questionIndex].html.style.display="none";
//   };

//   return btnNext;
// }