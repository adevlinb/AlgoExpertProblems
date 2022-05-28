function isPalindrome(string) {
  let strArray = string.split("");
  let revStrArray = strArray.reverse().join("");
  return string === revStrArray;
}
