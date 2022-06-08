function isMonotonic(array) {
  // Write your code here.
  let monotonic = true;
  if (array.length <= 2) return true;

  for (let i = 1; i < array.length; i++) {
    if (
      (array[i] < 0 && array[i - 1] > 0) ||
      (array[i] > 0 && array[i - 1] < 0)
    )
      monotonic = false;
    if (Math.abs(array[i]) < Math.abs(array[i - 1])) monotonic = false;
  }

  return monotonic;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
