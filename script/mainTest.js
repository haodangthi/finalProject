let thisTestIndex= +localStorage.getItem('thisTestIndex');

let test= new Test(tests[thisTestIndex],thisTestIndex);
test.createQuestion();
console.log(test.createdQuestions[test.questionIndex-1].questionIndex);
document.body.appendChild(test.createdQuestions[0].html);
