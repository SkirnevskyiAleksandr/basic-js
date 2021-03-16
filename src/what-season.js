const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date ) {
  if(typeof date != 'object')
    return 'Unable to determine the time of year!'

  if(toString.call(date) != '[object Date]') throw 'It is not a date!';
  let arrMon = ['winter', 'winter' , 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
  let mon = date.getMonth()

  for(let i = 0; i < arrMon.length; i++) {
    if(mon == i) {
      return arrMon[i]
    }
  }
};
