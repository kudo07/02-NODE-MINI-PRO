const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath = '.' + url;

  if (filePath === './') {
    // if the root route is hit, respond with index.html
    filePath = './index.html';
  } else if (filePath === './about') {
    filePath = './about.html';
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('error loading ' + filePath);
    } else {
      const extname = path.extname(filePath);
      let contentType = 'text/html';

      switch (extname) {
        case '.js':
          contentType = 'text/javascript';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.json':
          contentType = 'application/json';
          break;
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT} `);
});
