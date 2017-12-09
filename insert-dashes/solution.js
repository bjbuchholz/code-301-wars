function insertDash(num) {
  var inStr = String(num);
  var outStr = inStr[0], i;

  for (i = 1; i < inStr.length; i++) {
    if (inStr[i - 1] % 2 !== 0 && inStr[i] % 2 !== 0) {
      outStr += '-';
    }

    outStr += inStr[i];
  }

  return outStr;
}