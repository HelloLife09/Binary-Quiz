const FinishLink = document.getElementById("finish-link-btn");
const PrevPage = window.document.title;
PrevPage = PrevPage.slice(0, 20);
PrevPage = PrevPage.slice(0, -1);

document.addEventListener("DOMContentLoaded", () => {
  FinishLink.addEventListener("click", () => {
    sessionStorage.setItem("CorrectAnswers", CorrectAnswers);
    sessionStorage.setItem("IncorrectGuesses", IncorrectGuesses);
    sessionStorage.setItem("TotalQuestions", TotalQuestions);
    window.location.href = `../finish.html?PreviousPage=${PrevPage}`;
  });
});
