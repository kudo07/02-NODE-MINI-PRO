// gun();
// function gun() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// }

// first phase
// the global manager store the gun() then it call  and store all the formal declaration

// second phase executing
// then it store the value and call the function
// console.log(student);
// function fun(val) {
//   console.log(student1);
//   var student1 = 10;
// }
// var student = 10;
// fun(student);
// console.log(student);

function fun(val) {
  var student;
  //   it is till in this function only
}

// console.log(student);// student is not defined

function run() {
  console.log(student); //100
  //tudent is not defined
}
student = 10;
function gun() {
  console.log(student); //10
  student = 100;
}
gun();
// phase -1 first all store the formal into the global manager
// student value become the 10
run();
// now student value become the 100
{
  let x = 1122;
}
console.log(x);
// x is not defined
