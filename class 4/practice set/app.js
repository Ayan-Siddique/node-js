const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <title>Calculator</title>
                  </head>
                  <body>
                    <h1>Welcome User to the Calculator</h1>
                    <a href="/calculator">Go to Calculator</a>
                  </body>
                </html>`);

    return res.end();
  }
  if (req.url === "/calculator") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <title>calculator</title>
                  </head>
                  <body>
                    <form action="/calculator-result" method="POST">
                      <input type="number" name="num1">
                      <input type="number" name="num2">
                      <input type="submit" value="sum">
                    </form>
                  </body>
                </html>`);

    return res.end();
  }

  if (req.method === "POST" && req.url === "/calculator-result") {
    dataHandler(req, res);
  }
});

function dataHandler(req, res) {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  let numbers = {};
  req.on("end", () => {
    const bufferBody = Buffer.concat(body).toString();

    const params = new URLSearchParams(bufferBody);

    numbers = Object.fromEntries(params);

    let result = sum(numbers.num1, numbers.num2);
  });
}

function sum(num1, num2) {
  return eval(`${num1} + ${num2}`);
}
const PORT = 5001;

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
