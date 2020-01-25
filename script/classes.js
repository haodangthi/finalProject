// CLASS ALL TESTS CREATOR

class AllTests {
  constructor(tests) {
    this.createdTests = [];
    this.testIndex = 0; // for counting created Tests
    this.userIndex=0;
    this.filteredTests = [];
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    this.allUsers=[];//JSON.parse(localStorage.getItem("AllUsers"));
    this.currentPage = 0;
    this.shownTests;
  }

  createAllTests() {
    //
    let allTestCont = document.querySelector(".allTests__container");

    for (var i = 0; i < tests.length; i++) {
      let t = this.createTest();
      t.createTestInfo();
      t.html.style.display = "none";
      allTestCont.appendChild(t.html);
    }
    
  }
  createTest() {
    let t = new Test(tests[this.testIndex], this.testIndex);
    this.createdTests.push(t);
    this.filteredTests.push(t);
    this.testIndex++;
    return t;
  }

  //shows items on the page
  showAllTests(arrayOfTests, pageIndex, itemsShown) {
    arrayOfTests.forEach(e => {
      //e.remove();
      e.html.style.display = "none";
    });

    let start = pageIndex + pageIndex * (itemsShown - 1);
    let end;
    if (arrayOfTests.length < itemsShown) {
      end = arrayOfTests.length;
    } else {
      end = start + itemsShown;
    }

    for (let i = start; i < end; i++) {
      arrayOfTests[i].showCard();
    }
  }

  filterTest() {
    this.filteredTests.forEach(e => (e.html.style.display = "none"));
    this.filteredTests = filter(this.createdTests);
    this.showAllTests(this.filteredTests, 0, 6);
  }
}

class Test {
  constructor(test, testIndex) {
    this.testName = test.testName;
    this.questions = test.testQuestions; //array of questions(objects)
    this.testIndex = testIndex;
    this.testLevel = test.testLevel;
    this.testSubject = test.testSubject;
    this.time = test.time;
    this.timeSpent;
    this.score = test.score;
    //this.img=test.img;

    this.currentPoints = 0;
    this.finalScore;
    this.createdQuestions = [];
    this.answeredQuestions = [];
    this.questionIndex = 0;
    this.currentQuestionIndex = 0;
    this.html;
    this.btnStart;
    // this.templateCopy =  document.querySelector("template").content.cloneNode(true);
  }

  createTestInfo() {
    //creates HTML for test
    this.html = createTestHTML(
      this.testName,
      this.testLevel,
      this.testSubject,
      this.time,
      this.score
    );
    this.btnStart = this.html.querySelector(".btn__start__test");
    let thisTestIndex = this.testIndex;
    let time=this.time;
    this.btnStart.onclick = function() {
      console.log("btn start");
      localStorage.setItem("thisTestTime",time);
      localStorage.setItem("thisTestIndex", thisTestIndex.toString());
    };
  }

  showCard() {
    //card =>карточка теста
    this.html.style.display = "";
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

// CLASS QUESTION

class Question {
  constructor(thisTest, questions, questionIndex) {
    // Test obj, Question object, index of created (last) question
    //this.testIndex=textIndex;
    this.questionIndex = questionIndex;
    this.question = questions.question;
    this.answeredCorrectly = false;
    //this.test = thisTest;
    this.testIndex = thisTest.testIndex;
    this.isShown = false;

    this[1] = questions[1];
    this[2] = questions[2];
    this[3] = questions[3];
    this[4] = questions[4];
    this.correctAnswer = questions.correctAnswer;
    this.usersAnswer;
    this.btnNext;
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
}


class User{
  constructor(){
    
    this.userIndex;
    this.username;
    this.password;
    this.isLoggedIn;
    this.completedTests=[];
  }

  singUp(username,password,initTests){
    this.username=username;
    this.password=password;
    this.userIndex=initTests.userIndex;
    initTests.userIndex++;
  }

  logIn(input,passInput){
     if(this.username===input && this.password===passInput){
       this.isLoggedIn=true;
     }
  }

  addCompletedTest(test){
      this.completedTests.push({
        test:test,
        score:test.finalScore
        //time:
      });
  }
}
