



// 2 make function to randomly show question 

// function getQuestionhist() {
//     let = quest_hists = ["Who is the president?", "Why is the president?", "What is the president?"];
//     let quest_hist = quest_hists[Math.floor(Math.random() * quest_hists.length)];
//     document.getElementById("showQuestionHist").textContent = "Your new question is " + quest_hist;
// };

// function getQuestionMon() {
//     let = quest_mons = ["What currency does America use?", "How many pennies in 17 dollars?", "What is the president on the $50.00?"];
//     let quest_mon = quest_mons[Math.floor(Math.random() * quest_mons.length)];
//     document.getElementById("showQuestionMon").textContent = "Your new question is " + quest_mon;
// };

// function getQuestionMusic() {
//     let = quest_musics = ["Who wrote Livin on a Prayer?", "What is the longest note?"];
//     let quest_music = quest_musics[Math.floor(Math.random() * quest_musics.length)];
//     document.getElementById("showQuestionMusic").textContent = "Your new question is " + quest_music;
// };

// function getQuestionMovie() {
//     let = quest_movs = ["What movie did Spielberg direct?", "Who starred in King Kong?"];
//     let quest_mov = quest_movs[Math.floor(Math.random() * quest_movs.length)];
//     document.getElementById("showQuestionMov").textContent = "Your new question is " + quest_mov;
// };

// make sure css has it displayed nicely , background should be light colored so we can see the text

// align items in grid for easy reading and spacing

// make sure button goes away after clicking start----

// make a timer function 10 seconds? --

// function startTimer() {
//     countdown 1000 // 10 seconds
// } //  set interval? innerhtml
// function timeupdt() {
//     //make funcction that updates countdown time in html
// }
// */
// var timeLeft = 10;
// var elem = document.getElementById('Timer');

// var timerId = setInterval(countdown, 1000);

// function countdown() {
//   if (timeLeft == 0) {
//     clearTimeout(timerId);
//     console.log("Time's up!")
//   } else {
//     elem.innerHTML = timeLeft + ' seconds remaining';
//     timeLeft--;
//   }
// }

//css visibilty property--hide other question

var timeLeft = 10;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    useNextButton();
    strikes++;
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

const questions = [
    {
        question: "What food is stolen the most in the world?",
        answers: [
            { text: "cheese", correct: true},
            { text: "chocolate", correct: false},
            { text: "fresh meat", correct: false},
            { text: "baby carrots", correct: false},
        ]
    },
    {
        question: "In what state is it legal to hunt unicorns?",
        answers: [
            {text: "California", correct: false},
            {text: "Florida", correct: false},
            {text: "Michigan", correct: true},
            {text: "Texas", correct: false}, 
        ]    
    },    {
        question: "What is the Cookie Monster's real name?",
        answers: [
            { text: "George", correct: false},
            { text: "Mikey", correct: false},
            { text: "Jose", correct: false},
            { text: "Sid", correct: true},
        ]
    },    {
        question: "How old is the oldest wooden wheel?",
        answers: [
            { text: "1000 years", correct: false},
            { text: "5000 years", correct: true},
            { text: "3000 years", correct: false},
            { text: "400 years", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0
let points = 0
let strikes = 0


function startGame(){
    currentQuestionIndex = 0;
    points = 0;
    strikes = 0;
    timeLeft = 10;
    nextButton.innerHTML = "Next"
    showQuestion();
  }

  function showQuestion(){
    resetQuestion();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". Your question is: " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", chooseAnswer);
    });

  }
  function resetQuestion(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
  }
function chooseAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        points++;
    }else {
        selectedBtn.classList.add("incorrect");
        strikes++;
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showPoints(){
    resetQuestion();
    questionElement.innerHTML = `You have ${points} total correct and ${strikes} total incorrect`;
    nextButton.innerHTML = "Start New Game";
    nextButton.style.display = "block";
}

function useNextButton(){
    currentQuestionIndex++;
    timeLeft = 10;
    if(currentQuestionIndex < questions.length && strikes < 3){
        showQuestion();
    }else{
        showPoints();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        useNextButton();
    }else{
        startGame();
    }
})
  startGame();