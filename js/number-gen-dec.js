const BinaryDisplay = document.getElementById("binary-display");
const NumberDisplay = document.getElementById("original-num");
const MaxNum = document.getElementById("max-num");

function GenerateNewNumber() {
  BinaryDisplay.classList.remove("correct");
  NumberDisplay.classList.remove("correct");

  let MaximumNumber = parseInt(MaxNum.innerText);
  let NewNum = GenerateRandomNum(MaximumNumber);

  NumberDisplay.textContent = NewNum;
  BinaryDisplay.value = "";
}
