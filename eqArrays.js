// function eqArrays(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;
// }
const eqArrays = (array1, array2) => array1.length === array2.length && array1.every((element, index) => element === array2[index]);

module.exports = eqArrays;
