const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`βββAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`πππ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`βββ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`πππ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
