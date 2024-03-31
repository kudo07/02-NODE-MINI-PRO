const http = require('http');
const fs = require('');
// 'create ' a simple http server
const server = http.createServer((req, res) => {
  // parse the url
  const url = new URL(req.url, `http://${req.headers.host}`);
  //   get the path from the url
  const path = url.pathname;
  //   handle different routes
  if (path === '/') {
    // if the root route is hit, respond with index.html
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (path === '/about') {
    // if the root route is hit, respond with index.html
    fs.readFile('about.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('error loading about.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(400);
    res.end('404 Not Found');
  }
});

// start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT} `);
});
