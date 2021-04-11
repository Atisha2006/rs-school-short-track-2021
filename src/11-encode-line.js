/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = Array.from(str);
  const res = [];
  let sum = 1;
  arr.forEach((item, i) => {
    if (arr[i + 1] !== item) {
      if (sum === 1) {
        res.push(item);
      } else {
        res.push(sum);
        res.push(item);
        sum = 1;
      }
    } else {
      sum++;
    }
  });
  return res.join('');
}

module.exports = encodeLine;
