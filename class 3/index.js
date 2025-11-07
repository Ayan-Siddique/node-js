const http = require("http");
const fs = require("fs")
const { buffer } = require("stream/consumers");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    <html>
      <head>
        <title>Simple Form</title>
      </head>
      <body>
        <form action="/submit" method="POST">
          <label for="name">Name:</label>
          <input id="name" name="name" type="text" required />

          <fieldset>
            <legend>Gender</legend>
            <label>
              <input type="radio" name="gender" value="male" required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
    return res.end();
  }

  if (req.url === "/submit" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      console.log(params.entries());

      // const finalBody = {};
      // for ( const [key, val] of params.entries()) {
      //   finalBody[key] = val;
      // }

      const finalBody = Object.fromEntries(params)
      console.log(finalBody);

      fs.appendFile('user.txt', JSON.stringify(finalBody), (err)=>{})
    });

    res.statusCode = 302;
    res.setHeader("Location", "/success");
    return res.end();
  }

  if (req.url === "/success") {
    return res.end("Form submitted successfully");
  }

  console.log(req.url, req.method);
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
