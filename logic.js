let currentQuiz = 0;
let score = 0;
let userName = "";
let quizData = [];
let selectedTopic = "all";

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answers = document.querySelectorAll(".answer");

function startQuiz() {
  userName = document.getElementById("username").value.trim();
  selectedTopic = document.getElementById("quiz-topic").value;
  if (!userName) return alert("Please enter your name");
  quizData = selectedTopic === "all" ? allQuizData : allQuizData.filter(q => q.topic === selectedTopic);
  document.getElementById("start-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  loadQuiz();
}

function loadQuiz() {
  deselectAnswers();
  resetOptionColors();
  const q = quizData[currentQuiz];
  questionEl.innerText = q.question;
  a_text.innerText = q.a;
  b_text.innerText = q.b;
  c_text.innerText = q.c;
  d_text.innerText = q.d;
}

function getSelected() {
  let answer;
  answers.forEach(ans => { if (ans.checked) answer = ans.id; });
  return answer;
}

function deselectAnswers() {
  answers.forEach(ans => ans.checked = false);
}

function resetOptionColors() {
  ["a", "b", "c", "d"].forEach(id => {
    document.getElementById("option-" + id).classList.remove("incorrect");
  });
}

function submitQuiz() {
  const selected = getSelected();
  if (!selected) return alert("Please select an answer!");
  if (selected === quizData[currentQuiz].correct) {
    score++;
  } else {
    document.getElementById("option-" + selected).classList.add("incorrect");
  }
  currentQuiz++;
  setTimeout(() => {
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      showCertificate();
    }
  }, 600);
}

function showCertificate() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("certificate-box").style.display = "block";
  document.getElementById("cert-name").innerText = userName;
  document.getElementById("cert-score").innerText = `${score} / ${quizData.length}`;
  document.getElementById("cert-topic").innerText = selectedTopic.toUpperCase();
}

function restartQuiz() {
  currentQuiz = 0;
  score = 0;
  document.getElementById("certificate-box").style.display = "none";
  document.getElementById("start-box").style.display = "block";
  document.getElementById("username").value = "";
}