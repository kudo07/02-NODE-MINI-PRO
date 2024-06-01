function sumAsync(x, y) {
  const p = new Promise((resolve, reject) => {
    // this resolve the promise we just created with the output of x+y
    resolve(x + y);
    //   this return the promise not the value
  });
  return p;
}
sumAsync(3, 3);
sumAsync(5, 7).then((result) => {
  console.log(result);
});
// to get the value we use then method to extrct the value from the promise object
