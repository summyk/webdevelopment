const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const fs=require('fs')
const filecontent=fs.readFileSync('tut48.html');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  res.end(filecontent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});