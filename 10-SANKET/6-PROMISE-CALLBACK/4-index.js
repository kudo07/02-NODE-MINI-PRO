const add = (function exec() {
  let counter = 0;
  return function process() {
    // this is iife function expression which remebers the varaiable each time when it call
    // the add()
    counter += 1;
    return counter;
  };
})();
console.log(add());
console.log(add());
console.log(add());
