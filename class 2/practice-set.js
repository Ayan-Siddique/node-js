const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "html; charset=UTF-8");
    res.write(`<html>`);
    res.write(`<head><title>Myntra</title></head>`);
    res.write(`<body>`);
    res.write(`<h1>Welcome to Myntra</h1>`);
    res.write(`<h2>Choose your destination !!!</h2>`);
    res.write(`<ul>`);
    res.write(`<li><a href="/men">Men</a></li>`);
    res.write(`<li><a href="/women">Women</a></li>`);
    res.write(`<li><a href="/kids">Kids</a></li>`);
    res.write(`</ul>`);
    res.write(`</body>`);
    res.write(`</html>`);
    return res.end();
  }

  if (req.url === "/men") {
    res.setHeader("Content-Type", "html; charset=UTF-8");
    res.write(`<html>`);
    res.write(`<head><title>Men's Section</title></head>`);
    res.write(`<body>`);
    res.write(`<h1>Welcome to Men's Section</h1>`);
    res.write(`<p>Explore the latest trends in men's fashion!</p>`);
    res.write(`</body>`);
    res.write(`</html>`);
    return res.end();
  }
  if (req.url === "/women") {
    res.setHeader("Content-Type", "html; charset=UTF-8");
    res.write(`<html>`);
    res.write(`<head><title>Women's Section</title></head>`);
    res.write(`<body>`);
    res.write(`<h1>Welcome to Women's Section</h1>`);
    res.write(`<p>Discover the newest styles in women's fashion!</p>`);
    res.write(`</body>`);
    res.write(`</html>`);
    return res.end();
  }
  if (req.url === "/kids") {
    res.setHeader("Content-Type", "html; charset=UTF-8");
    res.write(`<html>`);
    res.write(`<head><title>Kids' Section</title></head>`);
    res.write(`<body>`);
    res.write(`<h1>Welcome to Kids' Section</h1>`);
    res.write(`<p>Find the cutest outfits for kids!</p>`);
    res.write(`</body>`);
    res.write(`</html>`);
    return res.end();
  }
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");
  res.statusCode = 404;
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

