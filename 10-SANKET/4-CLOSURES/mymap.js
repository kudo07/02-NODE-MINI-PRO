function myMap(arr, callback) {
  var mappedArray = [];
  for (let i = 0; i < arr.length; i++) {
    // call the callback function on each element and store the result
    mappedArray.push(callback(arr[i], i, arr));
  }
  //   return the
  return mappedArray;
}
//
// Certainly! Let's break down the line mappedArray.push(callback(arr[i], i, arr)); with an example:

// Suppose we have the following array:

// javascript
// Copy code
// var numbers = [1, 2, 3, 4, 5];
// And we want to square each number in this array using our myMap function.

// Here's what happens when we execute mappedArray.push(callback(arr[i], i, arr)); for the first element (when i = 0):

// arr[i]: This is arr[0], which is the first element of the array numbers, i.e., 1.
// i: This is the index of the current element being processed, which is 0.
// arr: This is the original array itself, numbers.
// So, when we call callback(arr[i], i, arr), it's equivalent to calling callback(1, 0, [1, 2, 3, 4, 5]).

// original array
var nums = [1, 2, 3, 4, 5];
var newArray = myMap(nums, function (num, index) {
  // this is the functional expression of an anonymous function
  console.log(num, index);
  return num * num;
});
console.log(newArray);
