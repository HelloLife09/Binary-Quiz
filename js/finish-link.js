const FinishLink = document.getElementById("finish-link-btn");
let PrevPage = window.document.title;
PrevPage = PrevPage.slice(19, -1);
console.log(PrevPage);

FinishLink.addEventListener("click", () => {
  sessionStorage.setItem("CorrectAnswers", CorrectAnswers);
  sessionStorage.setItem("IncorrectGuesses", IncorrectGuesses);
  sessionStorage.setItem("TotalQuestions", TotalQuestions);

  window.location.href = `../finish.html?PreviousPage=${PrevPage}`;
});
