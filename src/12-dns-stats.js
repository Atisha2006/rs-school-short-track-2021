/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  domains.forEach((item) => {
    arr.push(item.split('.').reverse());
  });
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let tmpStr = '';
    for (let j = 0; j < arr[i].length; j++) {
      tmpStr = `${tmpStr}.${arr[i][j]}`;
      if (map.has(tmpStr)) {
        map.set(tmpStr, (map.get(tmpStr) + 1));
      } else {
        map.set(tmpStr, 1);
      }
    }
  }
  /*
  const res = {};
  map.forEach((value, key) => {
    res[key] = value;
  });
  */
  return Object.fromEntries(map);
}

module.exports = getDNSStats;
