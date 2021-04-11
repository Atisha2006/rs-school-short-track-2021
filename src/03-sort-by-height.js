/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = [];
  const resArr = [];

  arr.forEach((item) => {
    if (item !== -1) {
      sortArr.push(item);
    }
  });
  sortArr = sortArr.sort((a, b) => (
    a - b
  ));
  let n = 0;
  arr.forEach((item) => {
    if (item === -1) {
      resArr.push(item);
    } else {
      resArr.push(sortArr[n]);
      n++;
    }
  });
  return resArr;
}

module.exports = sortByHeight;
