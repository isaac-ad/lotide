const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      if (callback )
      console.log('item BEFORE: ', item);
      console.log('item AFTER: ', callback(item));
      console.log('---');
    }
    return results;
  }


// bellow is a copy file from assertEqual

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`Assertion Passed: {actual} === {expected}`);
      } else {
        console.log(`Assertion Failed: {actual} !== {expected}`);
      }
    };
    function head(arr) {
      return arr[0];
  }
// TEST CODE
assertEqual(eqArrays(["Lighthouse Labs", "Bootcamp" ,], ["Lighthouse Labs","Bootcamp",])) //=> should pass 
assertEqual(eqArrays([1,2,3], ["1",2,3])); //=> false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])) //=> false