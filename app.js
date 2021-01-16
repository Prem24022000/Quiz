const quizData = [
    {
        question: 'What is my favourite language',
        a: 'JavaScript',
        b: 'Python',
        c: 'Java',
        d: 'C',
        correct: 'a'
    },{
        question: 'What is my favourite color',
        a: 'red',
        b: 'blue',
        c: 'yellow',
        d: 'green',
        correct: 'a'
    },{
        question: 'What is my favourite book for programming',
        a: 'JavaScript',
        b: 'Python',
        c: 'Java',
        d: 'C',
        correct: 'a'
    },{
        question: 'What is my name',
        a: 'prem',
        b: 'prakash',
        c: 'prem prakash',
        d: 'shubh',
        correct: 'c'
    }
];

const quiz = document.querySelector('.container');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
    deleteSelected();
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deleteSelected(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}


submit.addEventListener('click', function(){
    const answer = getSelected();
    if(answer){
        
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h1>${score}/${quizData.length}</h1>
            <h2>The correct answer is:</h2>
            <p class="correct">(${quizData[0].correct}) JavaScript</p>
            <p class="correct">(${quizData[1].correct}) red</p>
            <p class="correct">(${quizData[2].correct}) JavaScript</p>
            <p class="correct">(${quizData[3].correct}) prem prakash</p>
            <button onclick=location.reload()>Reload</button>
            `;
        }
    }
});
