const quizData = [
{
    question:"Which language runs in a web browser?",
    a:"Java",
    b:"C",
    c:"Python",
    d:"JavaScript",
    correct:"d"
},
{
    question:"What does CSS stands for?",
    a:"Central Style Sheet",
    b:"Cascading Style Sheet",
    c:"Cascading simple sheet",
    d:"central simple sheets",
    correct:"b"
},
{
    question:"What does HTML stands for?",
    a:"HyperText Markup Language",
    b:"HyperText MAchine Language",
    c:"HyperText MArking Language",
    d:"HighText Markup Language",
    correct:"a"
},
{
    question:"What year was JavaScript Launched?",
    a:"1996",
    b:"1995",
    c:"1994",
    d:"none of this",
    correct:"b"
}
];

// getting elements in JavaScript

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer')

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizdata = quizData[currentQuiz]

    questionEl.innerText = currentQuizdata.question
    a_text.innerText = currentQuizdata.a
    b_text.innerText = currentQuizdata.b
    c_text.innerText = currentQuizdata.c
    d_text.innerText = currentQuizdata.d

}
// loadQuiz()

function deselectAnswers(){
    answerEls.forEach(answerEl => 
        answerEl.checked = false
    )
}

let score = 0;
function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML =` 
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})
