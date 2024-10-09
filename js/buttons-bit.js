document.addEventListener("DOMContentLoaded", () => {
  const BinDisplay = document.getElementById("original-bin");
  const NumDisplay = document.getElementById("number-display");
  const SubmitBtn = document.getElementById("number-submit-button");
  const BtnZero = document.getElementById("zero");
  const BtnOne = document.getElementById("one");
  const BtnTwo = document.getElementById("two");
  const BtnThree = document.getElementById("three");
  const BtnFour = document.getElementById("four");
  const BtnFive = document.getElementById("five");
  const BtnSix = document.getElementById("six");
  const BtnSeven = document.getElementById("seven");
  const BtnEight = document.getElementById("eight");
  const BtnNine = document.getElementById("nine");
  const NumBtns = [
    BtnZero,
    BtnOne,
    BtnTwo,
    BtnThree,
    BtnFour,
    BtnFive,
    BtnSix,
    BtnSeven,
    BtnEight,
    BtnNine,
  ];
  const BtnBack = document.getElementById("back");

  function Submit() {
    DisplayText = NumDisplay.textContent.trim();
    if (BinToDec(BinDisplay.textContent) === DisplayText) {
      BinDisplay.classList.toggle(".correct");
      NumDisplay.classList.toggle(".correct");
    }
  }

  NumBtns.forEach((NumBtn) => {
    NumBtn.addEventListener("click", () => {
      NumDisplay.textContent += NumBtn.innerText.trim();
    });
  });

  BtnBack.addEventListener("click", () => {
    NumDisplay.textContent -= 1;
  });
});
