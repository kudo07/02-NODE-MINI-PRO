function todo(task) {
  console.log('start');
  setTimeout(function func() {
    console.log('completed', task);
  }, 2000);
  console.log('end todo');
}
console.log('starting');
todo('assignment');
console.log('Ending');
// the question is todo is done and completed then how fun function access to task
//
