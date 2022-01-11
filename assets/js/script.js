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

var questionsCounter = 0;
var timerEl = document.getElementById("countdown");

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
    questionsCounter++;
}
    else {
        endGame();
    }
}

var endGame = function(){
    // clear question/answer content
    var questionEl = document.getElementById("q");
    questionEl.textContent = "";
    var a1 = document.getElementById("a1");
    a1.textContent = "";
    var a2 = document.getElementById("a2");
    a2.textContent = "";
    var a3 = document.getElementById("a3");
    a3.textContent = "";
    var a4 = document.getElementById("a4");
    a4.textContent = "";
    // Reveal end-game content
    var endGame = document.getElementById("end-game");
    endGame.style.display = "block";
}
function countdown(){
    // Timer that counts down from 5
    var timeLeft = 60;
    // setInterval method to be executed every second
    var timeInterval = setInterval(function() {
        if (timeLeft > 0 && questionsCounter < 5) {
            timerEl.textContent = timeLeft
            timeLeft--;
        } else {
            timerEl.textContent = timeLeft
            clearInterval(timeInterval);
        }
     },1000 );
}    
// var questionsHandler = function(){
//     var questionOne = document.getElementById("q");
//     questionOne.textContent = "";
//     questionOne.textContent = questionsArray[0];
//     var a1 = document.getElementById("a1")
//     a1.textContent = "";
//     a1.textContent = answersOne[0];
// }

// var createIntro = function(){
//     var startHeader = document.createElement("h1");
//     startHeader.className = "start-header";
//     startHeader.textContent = "Coding Quiz";
//     var startContent = document.createElement("p");
//     startContent.className = "start-content";
//     startContent.textContent = "Welcome to the Coding Quiz!  Test your knowledge against your peers by answering curriculum-based questions against the clock.  You'll start with 60 seconds and will lose 10 seconds for every incorrect answer.  Good luck!"
//     var startButton = document.createElement("button");
//     startButton.className = "start-button";
//     startButton.textContent = "Start Quiz";
// }

// var createQuestions = function(){
//     var questionOne = document.createElement("div");
//     questionOne.id = "q-one";
//     questionOne.textContent = "Which of the following would add text to a DOM element?";
//     var answerListOne = document.createElement("ol");
//     answerListOne.className = "answers-list"
// }

var startQuizHandler = function() {
    document.getElementById("start-body").style.display = "none";
    document.getElementById("countdown").style.display = "block";
    questionsHandler();
    countdown();
}

// Event listener 
document.getElementById("start-button").addEventListener("click", startQuizHandler);
// document.getElementsByClassName("answers").addEventListener("click", questionsHandler);
