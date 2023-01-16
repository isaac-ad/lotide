

// ACTUAL FUNCTION
const middle = function(array) {
  let result = []
  // check if array has odd number of elments
  if (array.length % 2 === 1){
    let middleIndex = (array.length - 1) / 2
    let middleElement = array[middleIndex]
    result.push(middleElement)
  }
  else {
    let firstMiddleIndex = (array.length / 2) - 1;
    let secondMiddleIndex = firstMiddleIndex + 1
    let firstMiddleElement = array[firstMiddleIndex]
    let secondMiddleElement = array[secondMiddleIndex]
    result.push(firstMiddleElement);
    result.push(secondMiddleElement);
  }
  return result ; 
}
let elemnts = [1,2,3,4]
let some = [1,2,3,4,5,6,7]
console.log(middle(elemnts));
console.log(middle(some));

// [1,2,3,4,5,6,7] = formulla 7-1 / 2 = 3 
// [1,2,3,4] = formulla ( 4 / 2 )-1 = 1 this is for to know the index of the first middle element 