//trivia needs

let playing = false;

let startbtn;

function startGame() {
    startButton.destroy();
    playing = true;
  }
  
// 1 make question and answer bank--array so i can change quuestions if needed

//let quest_hist = [1,2,3,4,5]
//let histtext = [] 

// 2 make function to randomly show question 

function getQuestionhist() {
    let = quest_hists = ["Who is the president?", "Why is the president?", "What is the president?"];
    let quest_hist = quest_hists[Math.floor(Math.random() * quest_hists.length)];
    document.getElementById("showQuestionHist").textContent = "Your new question is " + quest_hist;
};

function getQuestionMon() {
    let = quest_mons = ["What currency does America use?", "How many pennies in 17 dollars?", "What is the president on the $50.00?"];
    let quest_mon = quest_mons[Math.floor(Math.random() * quest_mons.length)];
    document.getElementById("showQuestionMon").textContent = "Your new question is " + quest_mon;
};

function getQuestionMusic() {
    let = quest_musics = ["Who wrote Livin on a Prayer?", "What is the longest note?"];
    let quest_music = quest_musics[Math.floor(Math.random() * quest_musics.length)];
    document.getElementById("showQuestionMusic").textContent = "Your new question is " + quest_music;
};

function getQuestionMovie() {
    let = quest_movs = ["What movie did Spielberg direct?", "Who starred in King Kong?"];
    let quest_mov = quest_movs[Math.floor(Math.random() * quest_movs.length)];
    document.getElementById("showQuestionMov").textContent = "Your new question is " + quest_mov;
};

// 3 include function read to compare answer-- make sure to include lowercasing for reading the input so no answer errors --- toLowercase

// 4 make input boxes in html for answer or possibly multiple choice

// 5 make game over function after 3 wrong guesses

/*if (strikes >= 3) {
    gameOver();
}
function gameOver() {
    alert("Game Over! Feel free to try again.")
    //hide or disable question buttons and timer, leave new game button active 
}

// 6 make score count how many are right

let points = 0
let strikes = 0
if (input = questanswer) { points++; // might have to change to arrow
    alert("Correct! You have " + points);
} else { strikes++;
    alert("Good try. A strike on the board." + strikes);
    checkanswer();
} //need to make sure this is calling the check answer function

// make button to play again after answering all questions or gameover 
//maybe use this to call the stargame function again

// make sure css has it displayed nicely , background should be light colored so we can see the text

// align items in grid for easy reading and spacing

// make sure button goes away after clicking start----

// make a timer function 10 seconds? --

function startTimer() {
    countdown 1000 // 10 seconds
} //  set interval? innerhtml
function timeupdt() {
    //make funcction that updates countdown time in html
}


*/
