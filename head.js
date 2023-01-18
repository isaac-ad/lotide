const assertEqual = require('./assertEqual');
const head = function(array) {
  return array[0];
};
 


console.log("first element of the array is:", head([1, 2, 3]), "the assertion is:", assertEqual(head([1, 2, 3]), 1));
console.log("first element of the array is:", head([5, 6, 7]), "the assertion is:", assertEqual(head([5, 6, 7]), 5));
console.log("first element of the array is:", head([0]), "the assertion is:", assertEqual(head([0]), 0));
console.log("first element of the array is:", head([]), "the assertion is:", assertEqual(head([]), undefined));

module.export = head;