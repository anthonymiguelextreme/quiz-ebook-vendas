// script.js
const quizData = [
    {
        question: "O que é a Bolsa de Valores?",
        a: "Um lugar onde se compra e vende imóveis.",
        b: "Um mercado onde se compram e vendem ações de empresas.",
        c: "Um local para leilões de arte.",
        d: "Uma agência de viagens.",
        correct: "b",
    },
    {
        question: "Qual é a importância da diversificação em investimentos?",
        a: "Aumentar a quantidade de investimentos em um único setor.",
        b: "Reduzir riscos distribuindo investimentos em diferentes ativos.",
        c: "Concentrar investimentos em uma única ação de alto rendimento.",
        d: "Evitar qualquer tipo de risco, investindo em ativos de baixo rendimento.",
        correct: "b",
    },
    {
        question: "O que é uma ação?",
        a: "Uma parte do capital social de uma empresa.",
        b: "Um empréstimo feito por uma empresa.",
        c: "Uma taxa cobrada pelo governo.",
        d: "Um fundo de investimento imobiliário.",
        correct: "a",
    },
    {
        question: "Qual a definição de renda passiva?",
        a: "Renda obtida através de um trabalho ativo.",
        b: "Renda obtida sem a necessidade de trabalho contínuo.",
        c: "Renda proveniente de vendas diretas.",
        d: "Renda obtida apenas por meio de trabalho freelancer.",
        correct: "b",
    },
    {
        question: "O que é um dividendo?",
        a: "O lucro distribuído aos acionistas de uma empresa.",
        b: "Um tipo de imposto sobre investimentos.",
        c: "Uma taxa cobrada por corretoras.",
        d: "Um bônus recebido por trabalhadores.",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            window.location.href = results.html?score=${score};
        }
    }
});