let questions = [

{
question:"Which programming language is procedural?",
options:["C","Python","Java","JavaScript"],
answer:"C"
},

{
question:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language",
"Hyper Tool Machine Language"
],
answer:"Hyper Text Markup Language"
},

{
question:"CSS is used for?",
options:[
"Database",
"Styling Web Pages",
"Operating System",
"Networking"
],
answer:"Styling Web Pages"
},

{
question:"CPU stands for?",
options:[
"Central Processing Unit",
"Computer Process Unit",
"Control Processing Unit",
"Central Program Unit"
],
answer:"Central Processing Unit"
}

];

let currentQuestion = 0;
let score = 0;
let attempted = 0;

let userAnswers = [];

let question = document.getElementById("question");

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

let nextBtn = document.getElementById("nextBtn");

let selectedAnswer = "";

function loadQuestion(){

    question.innerText =
    questions[currentQuestion].question;

    option1.innerText =
    questions[currentQuestion].options[0];

    option2.innerText =
    questions[currentQuestion].options[1];

    option3.innerText =
    questions[currentQuestion].options[2];

    option4.innerText =
    questions[currentQuestion].options[3];

    selectedAnswer = "";

    clearSelection();

    if(currentQuestion == questions.length-1){
        nextBtn.innerText = "Submit";
    }
}

function clearSelection(){

    option1.classList.remove("selected");
    option2.classList.remove("selected");
    option3.classList.remove("selected");
    option4.classList.remove("selected");
}

function selectOption(button){

    clearSelection();

    button.classList.add("selected");

    selectedAnswer = button.innerText;
}

option1.onclick = function(){
    selectOption(option1);
};

option2.onclick = function(){
    selectOption(option2);
};

option3.onclick = function(){
    selectOption(option3);
};

option4.onclick = function(){
    selectOption(option4);
};

nextBtn.onclick = function(){

    if(selectedAnswer == ""){
        alert("Please select an answer");
        return;
    }

    attempted++;

    userAnswers.push(selectedAnswer);

    if(selectedAnswer ==
       questions[currentQuestion].answer){
        score++;
    }

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

    }else{

        showResult();
    }
};

function showResult(){

    document.getElementById("options").style.display="none";
    nextBtn.style.display="none";
    question.style.display="none";

    let wrong = attempted - score;

    let result =
    "<h2>Quiz Successfully Completed</h2>";

    result +=
    "<p>Total Questions : " +
    questions.length + "</p>";

    result +=
    "<p>Attempted : " +
    attempted + "</p>";

    result +=
    "<p>Correct Answers : " +
    score + "</p>";

    result +=
    "<p>Wrong Answers : " +
    wrong + "</p>";

    result +=
    "<h3>Correct Answers</h3>";

    for(let i=0;i<questions.length;i++){

        result +=
        "<p><b>Q" + (i+1) + ":</b> "
        + questions[i].answer +
        "</p>";
    }

    document.getElementById("result")
    .innerHTML = result;
}

loadQuestion();