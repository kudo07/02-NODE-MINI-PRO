const http = require("http");
const fs = require("fs");
const fspromise = require("fs/promises");
const { fibonacciSlow, fibonacci } = require("./math.utils");
const server = http.createServer(async (req, res) => {
  if (req.url.includes("fibonacci-slow")) {
    let num = req.url.split("/").pop();
    console.log(num);
    if (isNaN(num[0])) {
      return res.end("Bad input");
    }
    const result = fibonacciSlow(Number(num[0]));
    return res.end(String(result));
  } else if (req.url.includes("fibonacci")) {
    let num = req.url.split("/").pop();
    if (isNaN(num[0])) {
      return res.end("Bad input");
    }
    const result = fibonacci(Number(num));
    return res.end(String(result));
  } else if (req.url === "/read-file") {
    fspromise
      .readFile("./README.md", {
        encoding: "utf-8",
      })
      .then((resulter) => {
        return res.end(result);
      });
  } else {
    return res.end("Welcome to Fibonacci API");
  }
});

const port = Number(process.argv[2]);
const server2 = http.createServer((req, res) => {
  return res.end("YES");
});
server.listen(port + 4);
server.listen(port);
console.log(`Server listening on http://localhost:${port}`);
console.log(`Server 2 listening on http://localhost:${port + 4}`);
