const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 * Если даны две строки, найдите количество общих символов у них.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  // Преобразование строк в массивы символов
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  // Инициализация счетчика общих символов
  let commonCount = 0;

  for (const char of arr1) {
    const index = arr2.indexOf(char);
    if (index !== -1) {
      commonCount++;
      arr2.splice(index, 1);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
