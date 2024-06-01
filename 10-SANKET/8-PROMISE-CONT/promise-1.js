const fetchPromise = fetch('https://fakestoreapi.com/products');
fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    console.log(res);
  });
// var a = 3;
// if (a == 3) {
//   a = 4;
// }
// console.log(a);
