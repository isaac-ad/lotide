const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const string = "light house labs";
const countLetters = function (str) {
  const obj = {};
  for (let letter of str) {
    if (letter !== " ") {
      if (!obj[letter]) {
        obj[letter] = 1;
      } else {
        obj[letter]++;
      }
    }
  }
  return obj;
};

assertEqual(countLetters(string), {
  l: 2,
  i: 1,
  g: 1,
  h: 2,
  t: 1,
  o: 2,
  u: 1,
  s: 1,
  e: 1,
});
