/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = Array.from(s1).sort();
  const arr2 = Array.from(s2).sort();
  let sum = 0;
  arr1.forEach((item) => {
    const k = arr2.indexOf(item);
    if (k >= 0) {
      arr2.splice(k, 1);
      sum++;
    }
  });
  return sum;
}

module.exports = getCommonCharacterCount;
