nums = [1, 2, 3, 4, 5];
var x = nums.map(function process(v, i) {
  // this is call back function
  console.log(v, i);
  return v * v;
});
console.log(nums);
console.log(x);
// x is the new array
// this map function returns a new array
