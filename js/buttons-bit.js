document.addEventListener("DOMContentLoaded", () => {
  const BinDisplay = document.getElementById("original-bin");
  const NumDisplay = document.getElementById("number-display");
  const SubmitBtn = document.getElementById("number-submit-btn");
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

  SubmitBtn.addEventListener("click", () => {
    DisplayText = NumDisplay.value.trim();
    if (BinToDec(BinDisplay.textContent) === DisplayText) {
      BinDisplay.classList.add(".correct");
      NumDisplay.classList.add(".correct");
    }
  });

  NumBtns.forEach((NumBtn) => {
    NumBtn.addEventListener("click", () => {
      NumDisplay.value += NumBtn.innerText.trim();
    });
  });

  BtnBack.addEventListener("click", () => {
    NumDisplay.value = NumDisplay.value.slice(0, -1);
  });
});
