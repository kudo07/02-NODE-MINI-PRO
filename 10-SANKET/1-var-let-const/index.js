var a = 10;
var a = 100;

let b; //declaration
b = 10; //initialisation
b = 100;
let z = 100; //assignment
// let z = 1000;
// cannot redecalre the block scope

if (true) {
  var a = 10;
  var a = 100;
  //   let b = 100;
  let b = 1000;
}
// cannot redecalre the block scope
if (true) {
  const a = 100;
  if (true) {
    // const a = 100;
    console.log(a);
  }
}
