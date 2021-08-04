const quizData = [
    {
        question: 'What is the biggest animal in the world?',
        a: 'Tiger shark',
        b: 'Killer whale',
        c: 'Blue whale',
        d: 'Hammerhead shark',
        correct: 'c'
    }, {
        question: 'Which planet is closest to the sun?',
        a: 'Venus',
        b: 'Earth',
        c: 'Moon',
        d: 'Mercury',
        correct: 'd'

    }, {
        question: 'What was the most used programming language in the year 2020?',
        a: 'Java',
        b: 'Javascript',
        c: 'Python',
        d: 'C++',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext markup language',
        b: 'Helicopters Terminals Motorboats Lamborginis',
        c: 'Cascading Style Sheet',
        d: 'Jason Object Notation',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched?',
        a: '1994',
        b: '1996',
        c: '1993',
        d: '1995',
        correct: 'd'
    }
]

const website = [
    {
        link: 'https://www.nationalgeographic.com/animals/mammals/facts/blue-whale',
    }, {
        link: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
    }, {
        link: 'https://www.javascript.com/'
    }, {
        link: 'https://en.wikipedia.org/wiki/HTML'
    }, {
        link: 'https://www.javascript.com/'
    }
]

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const response = document.getElementById('response');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    //console.log(answer);

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
            response.innerHTML = `You chose the correct answer!\n For your information here is a link: <a href="` + website[currentQuestion].link + `" target="_blank">Here is the link</a>`;
        } else {
            response.innerHTML = `You chose the incorrect answer!\n For your information here is a link: <a href="` + website[currentQuestion].link + `" target="_blank">Here is the link</a>`;
            //alert("You chose the incorrect answer! The correct answer is: " + quizData[currentQuestion].correct + "\nThis is a link for you to understand the correct answer!: " + website[currentQuestion].link)
        }
        currentQuestion++;
            if(currentQuestion < quizData.length){
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly!</h2> 
                <button onClick="location.reload()">Reload</button>`
        }
    }
})