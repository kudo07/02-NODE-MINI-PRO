function dunc(x, fn) {
  // x is number and fn is callback
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
  //   fn();calling the callback function passed
  // some more logic
}
//1
// dunc(10, function log() {
// this is a callback function
//   console.log('custom logger');
// });

// 2
// dunc(10, function () {
//   console.log('anony inside');
// });
//fun(15,gun())
// dont pass immediately pass
