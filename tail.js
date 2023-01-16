const tail = function(array) {
  return array.slice(1);
};

const testArray = [1, 2, 3];
assertEqual(tail(testArray).toString(), [2,3].toString());

const testArray1 = [5, 6, 7];
assertEqual(tail(testArray1).toString(), [6,7].toString());

const testArray2 = [0];
assertEqual(tail(testArray2).toString(), [].toString());

const testArray3 = [];
assertEqual(tail(testArray3).toString(), [].toString());