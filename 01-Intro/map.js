const array = ['a', 'b', 'c'];
const arr1 = array.map((item) => (item === 'a' ? 'h' : item));
console.log(arr1);
const arr2 = array.filter((item) => item !== 'a');
console.log(arr2);
