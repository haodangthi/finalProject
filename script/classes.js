class AllTests {
  constructor(tests) {
    this.createdTests = [];
    this.testIndex = 0;
    this.filteredTests = [];
  }

  createAllTests() {
    for (var i = 0; i < tests.length; i++) {
      this.createTest();
    }
    this.showAllTests(this.createdTests);
  }
  createTest() {
    let t = new Test(tests[this.testIndex], this.testIndex);
    this.createdTests.push(t);
    this.filteredTests.push(t);
    this.testIndex++;
    return t;
  }

  showAllTests(arrayOfTests) {
    for (let i = 0; i < arrayOfTests.length; i++) {
      arrayOfTests[i].showCard();
    }
  }

  filterTest() {
    let allTests = Array.from(
      document.querySelector(".allTests__container").children
    );
    allTests.forEach(e => {
      e.remove();
    });
    this.filteredTests = filter(this.createdTests);
    this.showAllTests(this.filteredTests);
  }
}

class Test {
  constructor(test, testIndex) {
    this.testIndex = testIndex;
    this.testLevel = test.testLevel;
    this.testSubject = test.testSubject;
    this.time = test.time;
    this.score = test.score;
    //this.img=test.img;
    this.testName = test.testName;
    this.questions = test.testQuestions; //array of questions(objects)
    this.currentPoints = 0;
    this.finalScore;
    this.createdQuestions = [];
    this.answeredQuestions = [];
    this.questionIndex = 0;
    this.currentQuestionIndex;
    this.html;
    this.btnStart;
    // this.templateCopy =  document.querySelector("template").content.cloneNode(true);
  }
  createTestInfo() {
    this.html = createTestHTML(
      this.testName,
      this.testLevel,
      this.testSubject,
      this.time,
      this.score
    );
    this.btnStart = this.html.querySelector(".btn__start__test");
  }

  showCard() {
    this.createTestInfo();
    document.querySelector(".allTests__container").appendChild(this.html);
  }
  createQuestion() {
    let q = new Question(
      this,
      this.questions[this.questionIndex],
      this.questionIndex
    );
    this.createdQuestions.push(q);
    this.questionIndex++;
    return q;
  }

  createAllQuestions() {
    for (var i = 0; i < this.questions.length; i++) {
      this.createQuestion();
    }
  }
}

class Question {
  constructor(thisTest, questions, questionIndex) {
    // Test obj, Question object, index of created (last) question
    //this.testIndex=textIndex;
    this.questionIndex = questionIndex;
    this.question = questions.question;
    this.answeredCorrectly = false;
    this.test = thisTest;

    this[1] = questions[1];
    this[2] = questions[2];
    this[3] = questions[3];
    this[4] = questions[4];
    this.correctAnswer = questions.correctAnswer;
    this.usersAnswer;
    this.btnNext ;
    this.html = createQuestionHtml(
      this[1],
      this[2],
      this[3],
      this[4],
      this.question,
      this,
      thisTest
    );
  }
  // this.btnNext.onclick=function(){
  //  thisTest.createQuestion()

  // }

  createNextBtn(thisTest) {
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
}
