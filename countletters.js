const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const countLetters = function(sentence) {
    let count = {};
    for (let letter of sentence) {
      if (letter !== ' ') {
        if (count[letter]) {
          count[letter] += 1;
        } else {
          count[letter] = 1;
        }
      }
    }
    return count;
  }
  
  const count = countLetters('LHL')
  console.log(count);
  assertEqual(count['L'], 2);
  assertEqual(count['H'], 1);