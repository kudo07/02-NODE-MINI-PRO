//1- global
var name = 'Sanket';

// declarement is declare whether is var const or let
function functionName() {
  console.log(name);
}

// 2-function scope
var name = 'Sanket';

// declarement is declare whether is var const or let
function functionName1() {
  var y = 10;
  function func() {
    console.log(y, 'y', 'this is  accesiible as  function scope');
    // here y is accessible as a greet function
    // y is acces to func() function but it not accessible into the global scope
  }
  func();
  console.log('y', y);

  return name;
}
functionName1();

//
if (true) {
  var full = 'a';
}
if (false) {
  var zull = '2';
}
console.log(full, zull, 'full');

// let
// {
//   let leta = 'a';
//   console.log(leta);
// }
// console.log(leta);
// error because of block scope
console.log(vara, 'vara');
// undefined vara

var vara = 'a';
// console.log(letb, 'letb');
// letb is not defined
let leta = 'b';

function letaFunction() {
  // let a;
  let a = 100;
  // error of re-decalaration
  function access() {
    console.log(a);
  }
  access();
}
letaFunction();
// let access in the function scope inside the nested functions also
// but not in the global scope

let letr;
letr = 10;
letr = 12;
console.log(letr, 'letr');
//the block scope letp can be re-assign by decalaration

//
// error block scope letp cannot re-initialise again n again
