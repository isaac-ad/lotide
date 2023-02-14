const loopyLighthouse = function (ranges, multiples, words) {
  for (let i = ranges[0]; i <= ranges[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log("battybeacon");
    } else if (i % multiples[0] === 0) {
    console.log(words[0]);
    } else if (i % multiples[1] === 0) {
     console.log(words[1]);
    } else {
     console.log(i)
    }
  }
};
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
