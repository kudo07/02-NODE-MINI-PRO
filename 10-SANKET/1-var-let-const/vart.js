{
  var x = 10;
  //   became global due to var
  console.log(x);
}
console.log(x);
// 10 10
// function
function functionName() {
  var x = 10;
  console.log(x);
}

console.log(x);
// getting an error as x is only accessible in function not in global

function functionName() {
  console.log(x);
  // getting undefined due to the lexical scoping

  var x = 10;
  console.log(x);
}

// 3- if there is not function then due to var it will became the global scope
if (true) {
  var z = 10;
} else {
  var w = 11;
}
// we can access due to var
console.log(z);
console.log(w, 'w');
// 3
function foo() {
  var x = 1;
  function boo() {
    var z = 2;
    console.log(x);
  }
  boo();
}
foo();
console.log(x, w);
// refence error ,"y" is scoped to 'bar'
// var in block is accesible but var in function scope into the another function didnt accesible
//
for (var a of [1, 2, 3]);
{
  console.log(a); // 3
}
//  var is added as a non-configurable property if the global object.
// this means its property of the blobal object.
// its property descriptor cannot be changed and it
// cannot be deleted using  "delete"
// js has automatic memory management
// and it would meke no sense to be able to use the delete operator on a global variable

//
// this is declation
bla = 2;
var bla;
console.log(bla);
//
// only variable decalartion is hoisted not its initialisation
// means

// in declaration it will get undefined
console.log(aux);
var aux = 1000;

//
//
function doSomething() {
  // initialisation gives an undefined

  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

//
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}

//
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined

//
var a = 1;
// initialisation

function a() {}
console.log(a); // 1

//
// var a = 1;
// let a = 2; // SyntaxError: Identifier 'a' has already been declared

//Because var declarations are not scoped to block

//it doestnt apply where let is in a child scope of var not the same scope
// var a = 1;
// {
//   let a = 2;
// }

// A var declaration within a function's body can have the same name as a parameter.
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1

var rux;
{
  rux = 1;
}
console.log(rux, 'rux');

//
console.log(bux, 'bux');
var bux;
bux = 10;
// undefined bux

var yux = 0; //initialising

yux = 0; //declaring
//
//
var x = 0;
function f() {
  var x = (y = 1); // Declares x locally; declares y globally.
}
f();

console.log(x, y); // 0 1

// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!

// decalring
var x;
// assigning
x = 0;
// initialising
var x = 10;

//
console.log(wux, 'wux');
var wux = 10;

console.log(nux, 'nux');
var nux;
nux = 1000;

bla = 2;
console.log(bla, 'bla');
var bla;
// undefined wux
// undefined nux

// This is implicitly understood as:

// JS
// Copy to Clipboard
bla = 2;
var bla;
console.log(bla, 'vouhourwhnoi');
// this is hoisting

// vla = 2;
// let vla;
// console.log('vlavlavla', vla);
// error reference hoindstiong not happen in let
