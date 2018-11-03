function sumOfOther(numbersForSum) {
  const sum = numbersForSum.reduce((acc, val) => acc + val, 0);
  const result = numbersForSum.map(el => sum - el);
  return result;
}

module.exports = sumOfOther;
