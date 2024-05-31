console.log(name); //unefined due to hoistting because scope manager know the var but the value
change();
var name = 'yha pe bahr hu';
function change() {
  var name = 'andr change hogya shyd'; //makes global inside the function scope
  console.log(name);
  function printt() {
    console.log(name, 'and prinnttt mai');
  }
  printt();
}
console.log(name); //yha pe bahr hu because name variable is inside the function scope not the global
