const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    times = 1,
    separator = '+',
    addition = '',
    additiontimes = 1,
    additionSeparator = '|'
  } = options;

  const repeatedAdd = repeatString(addition, additiontimes, additionSeparator);
  const repeatedStr = repeatString(str + repeatedAdd, times, separator);

  return repeatedStr;
}

module.exports = {
  repeater
};
