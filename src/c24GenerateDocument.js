function generateDocument(characters, document) {
  // Write your code here.
  let countMap = {};
  for (const char of characters) {
    if (!(char in countMap)) countMap[char] = 0;
    countMap[char]++;
  }

  for (const char of document) {
    if (!(char in countMap) || countMap[char] === 0) return false;
    countMap[char]--;
  }

  return true;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
