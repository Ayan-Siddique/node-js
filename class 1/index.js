const http = require('http');

let server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.end('welcome to the about page');
  }

  if (req.url === '/') {
    res.end('welcome to our home page');
  }

  if (req.url === '/contact') {
    res.end('welcome to the contact page');
  }
  
});

server.listen(5000);
