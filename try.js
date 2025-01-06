// Quiz Data remains the same as above, including the React category question about 'key' prop
// Let's complete that question and continue with the rest of the implementation

// Complete the last React question that was cut off
const quizData = [
    // ... HTML, CSS, JavaScript categories remain the same ...
    
    {
        category: "HTML",
        questions: [
            {
                question: "What does HTML stand for?",
                options: {
                    a: "Hyper Text Markup Language",
                    b: "High-Level Text Markup Language",
                    c: "Hyper Tool Markup Language",
                    d: "Hyper Transfer Markup Language",
                },
                correct: "a",
            },
            {
                question: "What is the purpose of the <title> tag in HTML?",
                options: {
                    a: "To add a title to a paragraph",  
                    b: "To set the title of the webpage shown in the browser tab",  
                    c: "To style the document title",  
                    d: "To include metadata",
                },
                correct: "b",
            },
            {
                question: "Which tag is used to create a hyperlink in HTML?", 
                options: {
                    a: "link",  
                    b: "a",  
                    c: "href",  
                    d: "hyper",  
                },
                correct: "b",
            },
            {
                question: "Which attribute is used to specify the destination of a link?",
                options: {
                    a: "href",  
                    b: "src",  
                    c: "alt",  
                    d: "link",  
                },
                correct: "a",
            },
            {
                question: "What is the correct way to create a checkbox in HTML?",
                options: {
                    a: "checkbox",  
                    b: "input type='checkbox'",  
                    c: "input checkbox='true'",  
                    d: "input type='box'",  
                },
                correct: "b",
            },
        ],
    },
    {
        category: "CSS",
        questions: [
            {
                question: "What does CSS stand for?",
                options: {
                    a: "Cascading Style Sheets",
                    b: "Computer Style Sheets",
                    c: "Creative Style Sheets",
                    d: "Colorful Style Sheets",
                },
                correct: "a",
            },
            {
                question: "Which property is used to change the background color in CSS?",
                options: {
                    a: "color",
                    b: "bgcolor",
                    c: "background-color",
                    d: "background-style",
                },
                correct: "c",
            },
            {
                question: "How do you select an element with the ID 'header' in CSS?",
                options: {
                    a: ".header",  
                    b: "#header",  
                    c: "header",  
                    d: "*header", 
                },
                correct: "b",
            },
            {
                question: "Which CSS property is used to make text bold?",
                options: {
                    a: "font-weight",  
                    b: "text-style",  
                    c: "text-decoration",  
                    d: "font-style",
                },
                correct: "a",
            },
            {
                question: "What is the default position value in CSS?",
                options: {
                    a: "relative",  
                    b: "absolute",  
                    c: "fixed",  
                    d: "static", 
                },
                correct: "d",
            },
        ],
    },
    {
        category: "JavaScript",
        questions: [
            {
                question: "How do you write 'Hello, World!' in an alert box?",
                options: {
                    a: "alert('Hello, World!');",  
                    b: "msg('Hello, World!');",  
                    c: "alertBox('Hello, World!');",  
                    d: "msgBox('Hello, World!');",  
                },
                correct: "a",
            },
            {
                question: "Which method is used to find the length of a string in JavaScript?",
                options: {
                    a: "length()",  
                    b: "len()",  
                    c: "size()",  
                    d: "stringLength()",  
                },
                correct: "a",
            },
            {
                question: "What will console.log(2 + '2'); output?",  
                options: {
                    a: "4",  
                    b: "22",  
                    c: "NaN",  
                    d: "Error",   
                },
                correct: "b",
            },
            {
                question:  "How do you create a function in JavaScript?",  
                options: {
                    a: "function = myFunction()",  
                    b: "function myFunction()",  
                    c: "create myFunction()",  
                    d: "myFunction function()",
                },
                correct: "b",
            },
            {
                question:  "What is React primarily used for?" ,  
                options: {
                    a: "Backend development",  
                    b: "Database management",  
                    c: "Building user interfaces",  
                    d: "Mobile app development",  
                },
                correct: "c",
            },
        ],
    },
    {

        category: "React",
        questions: [
            {
                question: "What is React primarily used for?",  
                options: {
                    a: "Backend development",  
                    b: "Database management",  
                    c: "Building user interfaces",  
                    d: "Mobile app development",  
                },
                correct: "c",
            },
            {
                question: "What is a React component?",
                options: {
                    a: "A function or class that returns JSX",  
                    b: "A React library module",  
                    c: "A type of JavaScript object",  
                    d: "A backend server method",  
                },
                correct: "a",
            },
            {
                question: "Which hook updates state in functional components?", 
                options: {
                    a: "setState()",  
                    b: "updateState()",  
                    c: "useState()",  
                    d: "changeState()",
                },
                correct: "c",
            },
            {
                question: "What is the purpose of the 'key' prop in lists?",
                options: {
                    a: "To add custom styles",  
                    b: "To uniquely identify list items",  
                    c: "To sort the list automatically",  
                    d: "To render items faster",  
                },
                correct: "b",
            },
            {
                question: "What is JSX?", 
                options: {
                    a: "JavaScript XML",  
                    b: "JavaScript Extension",  
                    c: "JSON XML",  
                    d: "JavaScript Syntax",
                },
                correct: "a",
            }
        ],
    }
];


// Global Variables
let currentCategory = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timerInterval = null;
let timeLeft = 15;
let isAnswerSelected = false;

// DOM Elements
const homeScreen = document.getElementById("home-screen");
const rulesScreen = document.getElementById("rules-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");
const beginButton = document.getElementById("begin-btn");
const finalScoreElement = document.getElementById("final-score");
const correctAnswersElement = document.getElementById("correct-answers");
const wrongAnswersElement = document.getElementById("wrong-answers");
const timeTakenElement = document.getElementById("time-taken");
const progressBarFill = document.getElementById("progress-bar-fill");

// Event Listeners
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.category-button').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        currentCategory = quizData.find(cat => cat.category === button.dataset.category);
        beginButton.disabled = false;
        beginButton.classList.remove('disabled');
    });
});

beginButton.addEventListener("click", showRules);
document.getElementById("start-quiz-btn").addEventListener("click", () => startQuiz());
document.getElementById("retry-btn").addEventListener("click", restartQuiz);
document.getElementById("home-btn").addEventListener("click", goToHome);

// Functions
function showRules() {
    homeScreen.classList.add("hidden");
    rulesScreen.classList.remove("hidden");
}

function startQuiz() {
    rulesScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    if (currentQuestionIndex >= currentCategory.questions.length) {
        return endQuiz();
    }

    isAnswerSelected = false;
    const currentQuestion = currentCategory.questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    Object.entries(currentQuestion.options).forEach(([key, value]) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = value;
        button.dataset.key = key;
        button.addEventListener("click", () => {
            if (!isAnswerSelected) {
                handleAnswer(key);
            }
        });
        optionsContainer.appendChild(button);
    });

    updateProgressBar();
    updateQuestionInfo();
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / currentCategory.questions.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

function updateQuestionInfo() {
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = currentCategory.questions.length;
}

function startTimer() {
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    timerElement.classList.remove('warning');

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 5) {
            timerElement.classList.add('warning');
        }

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            if (!isAnswerSelected) {
                handleTimeout();
            }
        }
    }, 1000);
}

function handleAnswer(selected) {
    if (isAnswerSelected) return;
    
    isAnswerSelected = true;
    clearInterval(timerInterval);
    
    const currentQuestion = currentCategory.questions[currentQuestionIndex];
    const selectedButton = optionsContainer.querySelector(`[data-key="${selected}"]`);
    const correctButton = optionsContainer.querySelector(`[data-key="${currentQuestion.correct}"]`);
    
    // Disable all options
    optionsContainer.querySelectorAll('.option').forEach(button => {
        button.disabled = true;
    });

    if (selected === currentQuestion.correct) {
        correctAnswers++;
        scoreElement.textContent = correctAnswers;
        selectedButton.classList.add('correct-answer');
        showFeedback("Correct!", "feedback-correct");
    } else {
        wrongAnswers++;
        selectedButton.classList.add('wrong-answer');
        correctButton.classList.add('correct-answer');
        showFeedback("Incorrect! The correct answer was: " + 
            currentQuestion.options[currentQuestion.correct], "feedback-wrong");
    }

    setTimeout(moveToNextQuestion, 2000);
}

function handleTimeout() {
    isAnswerSelected = true;
    const currentQuestion = currentCategory.questions[currentQuestionIndex];
    const correctButton = optionsContainer.querySelector(`[data-key="${currentQuestion.correct}"]`);
    
    wrongAnswers++;
    correctButton.classList.add('correct-answer');
    showFeedback("Time's up! The correct answer was: " + 
        currentQuestion.options[currentQuestion.correct], "feedback-timeout");
    
    // Disable all options
    optionsContainer.querySelectorAll('.option').forEach(button => {
        button.disabled = true;
    });

    setTimeout(moveToNextQuestion, 2000);
}

function showFeedback(message, className) {
    const feedbackElement = document.getElementById("question-feedback");
    feedbackElement.textContent = message;
    feedbackElement.className = `feedback ${className}`;
}

function moveToNextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
    startTimer();
}

function endQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const totalQuestions = currentCategory.questions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    
    finalScoreElement.textContent = `${percentage.toFixed(1)}%`;
    correctAnswersElement.textContent = correctAnswers;
    wrongAnswersElement.textContent = wrongAnswers;
    timeTakenElement.textContent = `${(totalQuestions * 15) - timeLeft}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    scoreElement.textContent = "0";
    
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    
    loadQuestion();
    startTimer();
}

function goToHome() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    currentCategory = null;
    
    resultScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
    
    document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('active');
    });
    beginButton.disabled = true;
    beginButton.classList.add('disabled');
}