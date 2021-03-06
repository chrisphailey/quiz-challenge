var questionsArray = ["Which of the following would add text to a DOM element?", 
"Which of the following would add a class to a DOM element?", 
"Which of the following would you use to append an element to a parent?", 
"Which of the following is an example of an ordered list item?",
"What do you use to store data to the browser?"]
var answersOne = [".writeText", ".textContent", ".addText", ".addWords"]
var answersTwo = ["class =", ".addClass", ".className", ".class"]
var answersThree = [".appendChild", ".appendParent", ".appendElement", ".append"]
var answersFour = ["- List item", "1. List item", "(List Item)", "<List Item>"]
var answersFive = ["Global Scope", "Local Scope", "Local Storage", "Global Storage"]
var answersArray = [answersOne, answersTwo, answersThree, answersFour, answersFive]
var correctAnswers = [".textContent", ".className", ".appendChild", "1. List item", "Local Storage"]
var correctDisplay = document.getElementById("correct-display")
var wrongDisplay = document.getElementById("wrong-display")
var bodyContainer = document.getElementById("body-container")
var playerInitials = document.getElementById("player-initials").addEventListener("input", playerInfo)
var highscores = JSON.parse(localStorage.getItem("highscores")) 
var questionsCounter = 0;
var timerEl = document.getElementById("countdown");
var timeLeft = 60
var questionsHandler = function (){
    
    if(questionsCounter < questionsArray.length) {
        document.getElementById("question").style.display = "block";
        var questionEl = document.getElementById("q");
        questionEl.textContent = "";
        questionEl.textContent = questionsArray[questionsCounter];
        for (var i=0; i < 4; i++){
            if(i===0){
                var a1 = document.getElementById("a1");
                a1.textContent = "";
                a1.textContent = answersArray[questionsCounter][i];
            }
            else if (i===1){
                var a2 = document.getElementById("a2");
                a2.textContent = "";
                a2.textContent = answersArray[questionsCounter][i];
            }
            else if (i===2) {
                var a3 = document.getElementById("a3");
                a3.textContent = "";
                a3.textContent = answersArray[questionsCounter][i];
            }
            else if (i===3) {
                var a4 = document.getElementById("a4");
                a4.textContent = "";
                a4.textContent = answersArray[questionsCounter][i];
            }
    } 
}
    else {
        endGame();
    }
}

var endGame = function(){
    // clear correct/wrong display
    removeDisplay();
    // clear question/answer content
    bodyContainer.remove();
    // Reveal end-game content
    var endGame = document.getElementById("end-game");
    endGame.style.display = "block";
    var finalScore = document.getElementById("score");
    finalScore.textContent = timeLeft;
}


// Add player initials and score to highscore list
function playerInfo(e){
    playerInitials = e.target.value;
}
// event listener for end game submit button
function infoUpdate(){
    var highscores = JSON.parse(localStorage.getItem("highscores")) 
    var playerInitials = document.getElementById("player-initials").value;
    var finalScore = document.getElementById("score").textContent
    if(!highscores){
        var obj = {};
        obj[playerInitials] = finalScore;
        let scoresArray = [];
        scoresArray.push(obj);
        localStorage.setItem("highscores", JSON.stringify(scoresArray))
    } else {
        console.log(highscores);
        var obj = {};
        obj[playerInitials] = finalScore;
        highscores.push(obj);
        localStorage.setItem("highscores", JSON.stringify(highscores)); 
    }
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    for(var i=0; i < highscores.length; i++){
        for(const property in highscores[i]){
            var scoreItem = document.createElement("li");
            scoreItem.textContent = `${property} : ${highscores[i][property]}`
            var scoreList = document.getElementById("score-list");
            scoreList.appendChild(scoreItem);
        }
    }
    highscoreHandler();
}
function highscoreHandler(){
    var endGame = document.getElementById("end-game");
    endGame.style.display = "none";
    var bodyContainer = document.getElementById("body-container");
    if(bodyContainer){
        bodyContainer.style.display = "none";
    }
    var highscoresPage = document.getElementById("highscores-page");
    highscoresPage.style.display = "block";    
}
// go back button returns user to start page
function returnHandler(){
    location.reload();
    }

document.getElementById("submit-button").addEventListener("click", infoUpdate)
document.getElementById("go-back").addEventListener("click", returnHandler)

function countdown(){
    // Timer that counts down from 5
    timerEl.textContent = timeLeft
    // setInterval method to be executed every second
    var timeInterval = setInterval(function() {
        if (timeLeft > 0 && questionsCounter < 5) {
            timeLeft--;
            timerEl.textContent = timeLeft
        } else {
            timerEl.textContent = timeLeft
            clearInterval(timeInterval);
        }
     },1000 );
}    

// hide the intro page, start the quiz and countdown timer
var startQuizHandler = function() {
    document.getElementById("start-body").style.display = "none";
    document.getElementById("timer-div").style.display = "flex";
    document.getElementById("countdown").style.display = "block";
    questionsHandler();
    countdown();
}
// add click event listener to answers
var answers = document.getElementsByClassName("answers");
for(var i=0; i < answers.length; i++){
    answers[i].addEventListener("click", removeDisplay);
    answers[i].addEventListener("click", answersHandler);
}
// remove right/wrong answer display on hover of answer div
function removeDisplay(){
    correctDisplay.textContent = "";
    wrongDisplay.textContent = "";
}
function answersHandler(event){
    // display correct answer message and move to next question
    if(event.target.textContent === correctAnswers[questionsCounter]){
        questionsCounter++;
        correctDisplay.textContent = "Correct"
        questionsHandler();
    // display wrong answer message and move to the next question
    } else {
        questionsCounter++;
        wrongDisplay.textContent = "Wrong"
        timeLeft = (timeLeft-10);
        questionsHandler();
    }
}

// Start quiz on click of button
document.getElementById("start-button").addEventListener("click", startQuizHandler);

