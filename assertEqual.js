// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`โโโAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐๐๐ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

