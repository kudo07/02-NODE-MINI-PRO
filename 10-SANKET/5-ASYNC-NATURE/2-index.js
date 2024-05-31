function process() {
  console.log('start');
  setTimeout(function execute() {
    console.log('executed some task 1');
  }, 10000);
  setTimeout(function execute() {
    console.log('executed some task 2');
  }, 5000);
  console.log('middle');
  for (let i = 0; i < 1000000; i++) {
    // some task
  }
  console.log('End');
}
process();
