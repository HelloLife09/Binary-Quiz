const NumDisplay = document.getElementById("original-num");
const BinDisplay = document.getElementById("binary-display");
const SubmitBtn = document.getElementById("binary-submit-btn");
const BtnZero = document.getElementById("zero");
const BtnOne = document.getElementById("one");
const BtnBack = document.getElementById("back");

window.onload = GenerateNewNumber();

function SubmitButton() {
  const DisplayText = BinDisplay.value.trim();
  const OriginalNum = DecToBin(NumDisplay.textContent, 5);
  if (OriginalNum === DisplayText) {
    BinDisplay.classList.add("correct");
    NumDisplay.classList.add("correct");
    setTimeout(GenerateNewNumber, 1500);
  } else {
    BinDisplay.classList.add("incorrect");
    NumDisplay.classList.add("incorrect");
    setTimeout(() => {
      BinDisplay.classList.remove("incorrect");
      NumDisplay.classList.remove("incorrect");
    }, 1000);
  }
}

BtnZero.addEventListener("click", () => {
  BinDisplay.value += BtnZero.innerText.trim();
});

BtnOne.addEventListener("click", () => {
  BinDisplay.value += BtnOne.innerText.trim();
});

BtnBack.addEventListener("click", () => {
  BinDisplay.value = BinDisplay.value.slice(0, -1);
});
