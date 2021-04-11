/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const size = {
    rows: matrix.length,
    cols: matrix[0].length,
  };
  const arr = new Array(size.rows);
  for (let i = 0; i < size.rows; i++) {
    arr[i] = new Array(size.cols).fill(0);
  }

  for (let i = 0; i < size.rows; i++) {
    for (let j = 0; j < size.cols; j++) {
      if (matrix[i][j] === true) {
        if (j + 1 < size.cols) {
          arr[i][j + 1]++;
        }
        if (j - 1 >= 0) {
          arr[i][j - 1]++;
        }
        if (i + 1 < size.rows) {
          arr[i + 1][j]++;
        }
        if (i - 1 >= 0) {
          arr[i - 1][j]++;
        }
        if (i - 1 >= 0 && j - 1 >= 0) {
          arr[i - 1][j - 1]++;
        }
        if (i + 1 < size.rows && j + 1 < size.cols) {
          arr[i + 1][j + 1]++;
        }
        if (i - 1 >= 0 && j + 1 < size.cols) {
          arr[i - 1][j + 1]++;
        }
        if (i + 1 < size.rows && j - 1 >= 0) {
          arr[i + 1][j - 1]++;
        }
      }
    }
  }
  return arr;
}

module.exports = minesweeper;
