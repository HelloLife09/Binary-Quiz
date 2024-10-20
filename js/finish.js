const urlParams = new URLSearchParams(window.location.search);
const PreviousPage = urlParams.get("PreviousPage");

const PageSpan = document.getElementById("page");
const Dash = document.getElementById("dash");
const CorrectNum = document.getElementById("correct-num");
const IncorrectNum = document.getElementById("incorrect-num");
const QuestionsNum = document.getElementById("questions-num");

const CorrectAnswers = sessionStorage.getItem("CorrectAnswers");
const IncorrectGuesses = sessionStorage.getItem("IncorrectGuesses");
const TotalQuestions = sessionStorage.getItem("TotalQuestions");

CorrectNum.textContent = CorrectAnswers;
IncorrectNum.textContent = IncorrectGuesses;
QuestionsNum.textContent = TotalQuestions;
console.log(PreviousPage);

if (PreviousPage === "5-bits") {
  PageSpan.textContent = "Binary to Decimal (5 bits)";
} else if (PreviousPage === "8-bits") {
  PageSpan.textContent = "Binary to Decimal (8 bits)";
} else if (PreviousPage === "numbers 0-31") {
  PageSpan.textContent = "Decimal to Binary (numbers 0-31)";
} else if (PreviousPage === "numbers 0-255") {
  PageSpan.textContent = "Decimal to Binary (numbers 0-255)";
} else {
  Dash.style.display = "none";
}
