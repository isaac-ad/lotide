const assertEqual = (actual, expected) => {
    if (actual === expected) {
      return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
    } else if (actual !== expected) {
      return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
    }
  };
  
    function head(arr) {
      return arr[0];
  }
//// TEST CODE
assertEqual(eqArrays(["Lighthouse Labs", "Bootcamp" , "assignment"], ["Lighthouse Labs","Bootcamp", "assignment" ])) //=> should pass 
assertEqual(eqArrays([1,2,3], ["1",2,3])); //=> false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])) //=> false