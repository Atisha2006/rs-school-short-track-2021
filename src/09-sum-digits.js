/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n;
  function res(a) {
    const arr = Array.from(String(a));
    result = arr.reduce((sum, current) => sum + (+current), 0);
  }
  while (String(result).length > 1) {
    res(result);
  }
  return result;
}
module.exports = getSumOfDigits;
