



// 2 make function to randomly show question 



// make sure css has it displayed nicely , background should be light colored so we can see the text

// align items in grid for easy reading and spacing



let timeLeft = 10;
let elem = document.getElementById('Timer');

let timerId;

function startTimer() {
    timerId = setInterval(countdown, 1000);
    timeLeft = 10;
}

function resetTimer() {
    clearInterval(timerId);
    startTimer();
}

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    strikes++;
    useNextButton();
    elem.innerHTML = timeLeft + ' seconds remaining';
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}


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
    nextButton.innerHTML = "Next"
    showQuestion();
    elem.style.display = `block`;
    startTimer();
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
    nextButton.style.display = "none";
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
    clearInterval(timerId);
    let elem = document.getElementById("Timer");
    nextButton.addEventListener("click", ()=> {
        startGame();
    })
    elem.style.display = `none`;
}

function useNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length && strikes < 3){
        showQuestion();
        resetTimer();
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