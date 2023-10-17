const quizData = [
    {
        question: "Наименьшая единица измерения данных?",
        a: "килограмм",
        b: "бит",
        c: "байт",
        correct: "b",
    },
    {
        question: "Как называются отдельные буквы, знаки, цифры в программировании?",
        a: "символы",
        b: "производные",
        c: "слайды",
        correct: "a",
    },
    {
        question: "Первый в мире программист?",
        a: "Билл Гейтс",
        b: "Ада Лавлейс",
        c: "Марк Цукерберг",
        correct: "b",
    },
    {
        question: "Кто создал Python?",
        a: "Билл Гейтс",
        b: "Гвидо ван Россум",
        c: "Стив Джобс",
        correct: "b",
    },
    {
        question: "Для чего в основном используется javascript?",
        a: "JavaScript позволяет создавать интерактивные веб-страницы",
        b: "Работать в офисных приложениях",
        c: "Это браузер",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы ответили правильно на ${score}/${quizData.length} вопросов. Неплохой результат. Ждем вас на наших курсах!</h2>
            <button onclick="location.reload()"><a href="https://inginirium.ru/courses/">Выбрать курс</a></button>
            `;
        }
    }
});