function runLengthEncoding(string) {
  // Write your code here.
  let strArr = string.split("");
  let encode = "";
  let current = "";
  let encodeArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i + 1] === strArr[i]) {
      current += strArr[i];
      continue;
    }
    if (strArr[i + 1] !== strArr[i]) {
      current += strArr[i];
      encodeArr.push(current);
      current = "";
    }
  }

  encodeArr.forEach(function (phrase) {
    let count = phrase.length;
    while (count > 9) {
      encode += `${9}${phrase[0]}`;
      count = count - 9;
    }
    encode += `${count}${phrase[0]}`;
  });

  return encode;
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
