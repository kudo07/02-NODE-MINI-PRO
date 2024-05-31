function fun() {
  console.log('this is inside fun');
}
function gun(fn) {
  console.log('inside function gun');
  fn();
  console.log('leaving gun');
}
// this is function expressions
gun(function () {
  // console.trace();
  console.log('new function passed');
});
// a. anony b. named
console.log('----------------');
gun(fun);

var c = function func() {
  console.log('inside the scope of the c');
};
c();
// c is asssigned a function
gunc();
function gunc() {
  console.log('this is called above');
}
