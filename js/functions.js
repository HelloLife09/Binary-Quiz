function BinToDec(BinNum) {
  let dec = 0;
  for (const digit of BinNum) {
    dec = dec * 2 + parseInt(digit, 10);
  }
  return dec.toString();
}

function DecToBin(DecNum, bits = 0) {
  const num = parseInt(DecNum, 10);

  if (num === 0) {
    return "0".padStart(bits, "0");
  }

  let BinStr = num.toString(2);

  if (bits > BinStr.length) {
    BinStr = BinStr.padStart(bits, "0");
  }

  return BinStr;
}
function GenerateRandomBin(bits) {
  let bin = "";
  for (let i = 0; i < bits; i++) {
    bin += Math.floor(Math.random() * 2);
  }
  return bin;
}

function GenerateRandomNum(MaxNumber) {
  let num = Math.floor(Math.random() * MaxNumber + 1);
  return num.toString();
}
