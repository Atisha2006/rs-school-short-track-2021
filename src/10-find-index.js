/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const arr = array;
  let i = 0;
  let l = arr.length;
  function res(a) {
    const c = Math.trunc(l / 2);
    if (a[i + c] === value) {
      i += c;
      l = 0;
    } else if (a[i + c] > value) {
      l = c;
    } else {
      if (l % 2) { i = i + c + 1; } else { i += c; }
      l = c;
    }
  }
  while (l > 0) {
    res(arr);
  }
  return i;
}
/* function findIndex(array, value) {
  const arr = array;
  let i = 0;
  function res(a) {
    const c = Math.trunc(a.length / 2);
    if (a[c] === value) {
      i += c;
      arr.length = 0;
    } else if (a[c] > value) {
      arr.length = c;
    } else {
      arr.splice(0, c + 1);
      i = i + c + 1;
    }
  }
  while (arr.length > 0) {
    res(arr);
  }
  return i;
} */
module.exports = findIndex;
