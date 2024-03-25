const questions = [
    {
        question:  "Which song has these lyrics?: 'Loro no sanno di che parlo'",
        answers: [
            { text: "Mark Chapman", correct: false},
            { text: "Torna A Casa", correct: false},
            { text: "Zitti E Buoni", correct: true},
            { text: "La Paura Del Buio", correct: false},
        ]
    },
    {
        question1:  " Which song has these lyrics?: 'Ehi, ci ho provato' ",
        answers: [
            { text: "Feel", correct: false},
            { text: "In Nome Del Padre", correct: true},
            { text: "Niente Da Dire", correct: false},
            { text: "Vent'Anni", correct: false},
        ]
    },
    {
        question2:  "Which song has these lyrics?: 'Because I'm the devil, who's searching for redemption'",
        answers: [
            { text: "Mammamia", correct: false},
            { text: "Own My Mind", correct: false},
            { text: "Stato Di Natura", correct: false},
            { text: "I Wanna Be Your Slave", correct: true},
        ]
    },
    {
        question3:  "Which song has these lyrics?: 'Yeah, you were running and running and running away from this conversation'",
        answers: [
            { text: "Baby Said", correct: true},
            { text: "Lividi Sui Gomiti", correct: false},
            { text: "Fear For Nobody", correct: false},
            { text: "Beggin'", correct: false},
        ]
    },
    {
        question4:  "Which song has these lyrics?: 'Give me your liquid spirit'",
        answers: [
            { text: "Moriro Da Re", correct: false},
            { text: "Touch Me", correct: true},
            { text: "New Song", correct: false},
            { text: "Supermodel", correct: false},
        ]
    },
    {
        question5:  "Which song has these lyrics?: 'I'm a lion tamer of indecent behavior'",
        answers: [
            { text: "Gasoline", correct: false},
            { text: "Caroline", correct: false},
            { text: "Don't Wanna Sleep", correct: true},
            { text: "Gossip", correct: false},
        ]
    },
    {
        question6:  "Which song has these lyrics?: 'Anche la rosa piu bella ha le spine'",
        answers: [
            { text: "Shit Blvd", correct: false},
            { text: "Timezone", correct: false},
            { text: "Chosen", correct: false},
            { text: "La Fine", correct: true},
        ]
    },
    {
        question7:  "Which song has these lyrics?: 'If you gonna set fire to the night'",
        answers: [
            { text: "Le Parole Lontane", correct: false},
            { text: "The Driver", correct: true},
            { text: "Trastevere", correct: false},
            { text: "Close To The Top", correct: false},
        ]
    },
    {
        question8:  "Which song has these lyrics?: 'Wasted in love, misunderstood'",
        answers: [
            { text: "Off My Face", correct: false},
            { text: "Valentine", correct: true},
            { text: "Immortale", correct: false},
            { text: "For Your Love", correct: false},
        ]
    },
    {
        question9:  "Which song has these lyrics?: 'Meet me there where it never closes'",
        answers: [
            { text: "Read Your Diary", correct: false},
            { text: "L'altra Dimensione", correct: false},
            { text: "Honey (Are U Coming)", correct: true},
            { text: "Bla Bla Bla", correct: false},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    let questionText = Object.values(currentQuestion)[0]
    questionElement.innerHTML = questionNo + ". " + questionText;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz()



