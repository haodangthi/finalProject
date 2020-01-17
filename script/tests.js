let test1 = [
  {
    question: "How old ___ you?",
    1: "are",
    2: "is",
    3: "or",
    4: "am",
    correctAnswer: "1",
    usersAnswer: null
  },
  {
    question: "Does she ___ to school?",
    questionIndex: 1,
    1: "go",
    2: "going",
    3: "goes",
    4: "gone",
    correctAnswer: "1",
    usersAnswer: null
  },
  {
    question: "He _____ not want to go to the movies.",
    questionIndex: 1,
    1: "do",
    2: "does",
    3: " is",
    4: "did",
    correctAnswer: "2",
    usersAnswer: null
  },
  {
    question: "It _____ a beautiful day today.",
    questionIndex: 1,
    1: "are",
    2: "is",
    3: "or",
    4: "am",
    correctAnswer: "2",
    usersAnswer: null
  },
  {
    question: " They're not here. They ____________ right now.",
    questionIndex: 1,
    1: "go to school",
    2: "swim at the beach",
    3: "are on holiday",
    4: "go to bed",
    correctAnswer: "3",
    usersAnswer: null
  }
];

var tests = [
  {
    testName: "Present Simple",
    testQuestions: test1,
    testLevel: "beginner",
    testSubject: "english",
    time: 30,
    score: 10
    // img:"../img/illustrations/clip-bio-technologies.png"
  },
  {
    testName: "Past Simple",
    testQuestions: test1,
    testLevel: "advanced",
    testSubject: "english",
    time: 30,
    score: 10
  },
  {
    testName: "Articles",
    testQuestions: test1,
    testLevel: "intermediate",
    testSubject: "english",
    time: 60,
    score: 10
  },
  {
    testName: "Past Continuous",
    testQuestions: test1,
    testLevel: "advanced",
    testSubject: "english",
    time: 60,
    score: 10
  }
];
