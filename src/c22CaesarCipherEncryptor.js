function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alpha.split("");
  let newCharsArr = [];

  for (let i = 0; i < string.length; i++) {
    let ind = alphaArr.indexOf(string[i]);
    if (key < 26) {
      ind += key;
      if (ind > 25) ind = ind - 26;
      let newChar = alpha[ind];
      newCharsArr.push(newChar);
    } else {
      key = key % 26;
      ind += key;
      if (ind > 25) ind = ind - 26;
      let newChar = alpha[ind];
      newCharsArr.push(newChar);
    }
  }

  let caesarConverted = newCharsArr.join("");
  return caesarConverted;
}
