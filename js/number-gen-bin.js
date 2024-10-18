const BinaryDisplay = document.getElementById("original-bin");
const NumberDisplay = document.getElementById("number-display");
const DigitsNum = document.getElementById("digits-num");

function GenerateNewNumber() {
  BinaryDisplay.classList.remove("correct");
  NumberDisplay.classList.remove("correct");

  let DigitsNumber = parseInt(DigitsNum.innerText);
  let NewNum = GenerateRandomBin(DigitsNumber);

  BinaryDisplay.textContent = NewNum;
  NumberDisplay.value = "";
}
