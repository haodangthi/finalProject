// creating question html

function createQuestionHtml(a1, a2, a3, a4, quest, questionObj, thisTest) {
  let q = document.createElement("div");
  q.classList.add("quesion");
  let quesH1 = document.createElement("h1");
  let quesText = document.createTextNode(quest);
  quesH1.appendChild(quesText);
  //q.classList.add("");
  quesH1.setAttribute("data-q", "quest1");
  let answList = document.createElement("ul");
  answList.setAttribute("data-ans", "all");
  let answers = [a1, a2, a3, a4];
  for (var i = 0; i < 4; i++) {
    let li = document.createElement("li");
    li.setAttribute("data-ans", `${i + 1}`);
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "answer");
    input.setAttribute("id", `answerCheckbox${i + 1}`);
    let label = document.createElement("label");
    label.setAttribute("for", `answerCheckbox${i + 1}`);

    let answerText = document.createTextNode(answers[i]);
    label.appendChild(answerText);
    li.appendChild(input);
    li.appendChild(label);
    li.onclick = function(e) {
      console.log("click", e.target);
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
  return q;
}


function createNextBtn(thisTest) {
  let btnNext = document.createElement("button");
  btnNext.classList.add("nextQ");
  let textBtn = document.createTextNode("Next");
  btnNext.appendChild(textBtn);
  btnNext.onclick = function() {
    let nextQuestion = thisTest.createQuestion();
    document.body.appendChild(nextQuestion.html);
  };

  return btnNext;
}