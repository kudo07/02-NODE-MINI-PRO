const express = require("express");
const { fibonacciSlow, fibonacci } = require("./math/utils");

const app = express();

// Get/ hello
const obj = [
  {
    id: "1",
  },
];

app.get("/hello", (req, res, next) => {
  const jsonContent = JSON.stringify(obj);
  res.end(jsonContent);
});
app.get("/fibonacci/:num", (req, res, next) => {
  let num = Number(req.params.num);

  if (isNaN(num)) {
    return res.end("bad input");
  }
  const result = fibonacci(Number(num));
  res.send(String(result));
});

app.get("/fibonacci-slow/:num", (req, res, next) => {
  let num = Number(req.params.num);
  if (isNaN(num)) {
    return res.end("bad input");
  }
  const result = fibonacci(Number(num));
  res.send(String(result));
});

app.listen(5000, () => {
  console.log("the server is start");
});
