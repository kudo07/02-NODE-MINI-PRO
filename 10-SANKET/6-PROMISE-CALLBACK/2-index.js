function a(name) {
  //   return name;
  return function b() {
    console.log(name);
    // return is empty right now
  };
}
let x = a('sanket');
console.log(x);
x();

// https://chatgpt.com/c/d471612c-b763-4408-89b4-bd5cdda9cf6b
