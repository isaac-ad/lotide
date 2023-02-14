const assertArraysEqual = (array1, array2) => {
  const isEqual = eqArrays(array1, array2);
  if (isEqual) { 
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const middle = array => {
  let middleArray = [];
  const isOdd = array.length % 2 !== 0;
  if (isOdd) {
    const middleIndex = (array.length - 1) / 2;
    const middleElement = array[middleIndex];
    middleArray = [middleElement];
  } else {
    const middleIndex1 = (array.length - 2) / 2;
    const middleIndex2 = middleIndex1 + 1;
    const middleElement1 = array[middleIndex1];
    const middleElement2 = array[middleIndex2];
    middleArray = [middleElement1, middleElement2];
  }
  return middleArray;
};

module.exports = middle;
