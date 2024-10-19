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

if (PreviousPage === "5-bit.html") {
  PageSpan.textContent = "Bin to Dec (5 bits)";
} else if (PreviousPage === "8-bit.html") {
  PageSpan.textContent = "Bin to Dec (8 bits)";
} else if (PreviousPage === "0-31-dec.html") {
  PageSpan.textContent = "Dec to Bin (numbers 0-31)";
} else if (PreviousPage === "0-255-dec.html") {
  PageSpan.textContent = "Dec to Bin (numbers 0-255)";
} else {
  Dash.style.display = "none";
}
