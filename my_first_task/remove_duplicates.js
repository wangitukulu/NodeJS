const lodash = require(`lodash`); // import lodash

const array = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10] 
const uniqEl = lodash.uniq(array)
console.log(uniqEl);// return new array with number no duplicated