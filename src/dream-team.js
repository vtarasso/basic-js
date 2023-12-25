const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
    return false;
  }
  // сначала убираем у массива с помощью три лишние пробелы,
  //  вытаскиваем первый символ, увеличиваем его и добавляем в массив
  const dreamTeamName = members.reduce((name, member) => {
    if (typeof member === 'string') {
      name.push(member.trim()[0].toUpperCase());
    }
    return name;
  }, []).sort().join('');

  return dreamTeamName;
}

module.exports = {
  createDreamTeam
};
