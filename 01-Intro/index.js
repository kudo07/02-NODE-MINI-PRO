// const os = require("os");
// const fs = require("fs");
// // console.log(os.cpus());
// const readme = fs.readFileSync("./Readme.md", {
//   encoding: "utf-8",
// });

// console.log(readme);
const { fib, fib1 } = require("./fib");
// const fib1 = require("./fib1");
// const fib1=require(""
// console.log(fib(10));

console.log(fib1(6));
const { faker } = require("@faker-js/faker");
const axios = require("axios");
async function samplereq() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(response.data);
}

samplereq();
