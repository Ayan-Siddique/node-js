const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "html; charset=UTF-8");
    res.write(`<html>`);
    res.write(`<head><title>My First Server</title></head>`);
    res.write(
      `<body><h1>Hello, World!</h1><p>This is my first HTTP server response.</p></body>`
    );
    res.write(`</html>`);
    return res.end();
  }

  if (req.url === "/about") {
    res.setHeader("Content-Type", "html; charset=UTF-8");
    res.write(`<html>`);
    res.write(`<head><title>My First Server</title></head>`);
    res.write(
      `<body><h1>Hello, World!</h1><p>This is my about page.</p></body>`
    );
    res.write(`</html>`);
    return res.end();
  }
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");
  res.write("Welcome to my first HTTP server!");
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
