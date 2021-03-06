function longestPeak(array) {
  // Write your code here.
  let longestPeakLength = 0;
  let i = 1
  while (i < array.length - 1) {
    let isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if(!isPeak) { 
      i ++;
      continue;
    }
    let leftIdx = i - 2;
    while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }
    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    let currPeakLength = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currPeakLength);
    i = rightIdx;
    
  }
  
  
  return longestPeakLength;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
