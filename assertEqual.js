const assertEqual = (actual, expected) => {
    if (actual === expected) {
      return `✅✅✅ Assertion passed. ${actual} === ${expected}`;
    } else if (actual !== expected) {
      return `🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`;
    }
  };

//// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

module.exports = assertEqual;
