function asyncSum(x, y) {
  console.log('1 asyncSum is executed');
  const p = new Promise((resolve, reject) => {
    // run in 500ms from now
    setTimeout(() => {
      console.log(
        '4. resolving sumasyncs promise with the result after 500ms '
      );
      resolve(x + y);
    }, 5000);
    // we dont nee to return anything
    console.log('2 sumasync is initiatiated');
  });
  console.log('3 sumasync has the promise');
  return p;
}
asyncSum(5, 7).then((result) => {
  console.log('5. The result of the addition is:', result);
});
