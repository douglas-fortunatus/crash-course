const http = require("http");

/**
 * @param req - represents the incoming request
 * @param res - is the response we are sending back
 */
const server = http.createServer((req, res) => {
  //   console.log(req);

  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  res.end(`<h1>Oops!</h1><a href="/">HOME</a>`);
});

server.listen(5000);
