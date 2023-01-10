// FUNCTION IMPLEMENTATION
function head(arr) {
    return arr[0];
  }
  
  assertEqual(head([1, 2, 3]), 1);
  assertEqual(head([5, 6, 7]), 5);
  assertEqual(head([0]), 0);
  assertEqual(head([]), undefined);