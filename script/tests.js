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
    
    1: "go",
    2: "going",
    3: "goes",
    4: "gone",
    correctAnswer: "1",
    usersAnswer: null
  },
  {
    question: "He _____ not want to go to the movies.",
    
    1: "do",
    2: "does",
    3: " is",
    4: "did",
    correctAnswer: "2",
    usersAnswer: null
  },
  {
    question: "It _____ a beautiful day today.",
    
    1: "are",
    2: "is",
    3: "or",
    4: "am",
    correctAnswer: "2",
    usersAnswer: null
  },
  {
    question: " They're not here. They ____________ right now.",
    
    1: "go to school",
    2: "swim at the beach",
    3: "are on holiday",
    4: "go to bed",
    correctAnswer: "3",
    usersAnswer: null
  }
];

let test2 = [
  {
    question: "I _____ to the mall after school.",
    1: "goed",
    2: "went",
    3: "gone",
    4: "go",
    correctAnswer: "2",
    usersAnswer: null
  },
  {
    question: "My brother _____ a bear an hour ago.",
    
    1: "see",
    2: "looked",
    3: "saw",
    4: "seen",
    correctAnswer: "3",
    usersAnswer: null
  },
  {
    question: "_____ Mike visit his grandmother last night",
    questionIndex: 1,
    1: "Did",
    2: "Does",
    3: "Was",
    4: "Is",
    correctAnswer: "1",
    usersAnswer: null
  },
  {
    question: "Alex did not _____ last weekend.",
    
    1: "working",
    2: "worked",
    3: "works",
    4: "work",
    correctAnswer: "4",
    usersAnswer: null
  },
  {
    question: "_____ Judy and Liz at last month's meeting?",
    
    1: "Was",
    2: "Were",
    3: "Did",
    4: "Do",
    correctAnswer: "2",
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
    testQuestions: test2,
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
