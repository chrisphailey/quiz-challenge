var createIntro = function();
    var startHeader = document.createElement("h1");
    startHeader.className = "start-header";
    startHeader.textContent = "Coding Quiz";
    var startContent = document.createElement("p");
    startContent.className = "start-content";
    startContent.textContent = "Welcome to the Coding Quiz!  Test your knowledge against your peers by answering curriculum-based questions against the clock.  You'll start with 60 seconds and will lose 10 seconds for every incorrect answer.  Good luck!"
    var startButton = document.createElement("button");
    startButton.className = "start-button";
    startButton.textContent = "Start Quiz";


var createQuestions = function();
    var questionOne = document.createElement("div");
    questionOne.id = "q-one";
    

var startQuizHandler = function() {
    startBody.remove();
}

// Event listener 
button.start-button.addEventListener("click", startQuizHandler)