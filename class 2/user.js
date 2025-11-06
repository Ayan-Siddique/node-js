const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "html; charset=UTF-8");
    res.write(`<html>`);
    res.write(`<head><title>user form</title></head>`);
    res.write(
      `<body><h1>User Form</h1><form action="/user" method="POST">
      <input type="text" name="username" placeholder="Enter username"/>
      <button type="submit">Submit</button></form></body>`
    );
    res.write(`</html>`);
    return res.end();
  }
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
