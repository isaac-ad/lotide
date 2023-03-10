const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1,array2)) { 
    console.log(`โโโAssertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`๐๐๐ Assertion Failed: ${array1} !== ${array2}`);
  }
};
function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);