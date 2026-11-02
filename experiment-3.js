const http = require('http');

PORT=3000

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(PORT, () => {
  console.log('Server running on http://localhost:3000');
});



// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('X-Lab', 'Node.js');

//   res.end('Hello World');
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

// const http = require('http');

// http.createServer((req, res) => {
// res.statusCode = 200;
// res.setHeader('Content-Type', 'text/plain');

// if (req.url === '/') res.end('Home Page');
// else if (req.url === '/about') res.end('About Page');
// else res.end('404 - Page Not Found');
// }).listen(3000);
// console.log('Server running on http://localhost:3000');





