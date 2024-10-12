function BinToDec(BinNum) {
  let dec = 0;
  for (const digit of BinNum) {
    dec = dec * 2 + parseInt(digit, 10);
  }
  return dec.toString();
}

function DecToBin(DecNum, bits = 0) {
  if (!DecNum) {
    return "0".padStart(bits, "0");
  }

  let BinStr = DecNum.toString(2);

  if (bits > BinStr.length) {
    BinStr = BinStr.padStart(bits, "0");
  }

  return BinStr;
}
