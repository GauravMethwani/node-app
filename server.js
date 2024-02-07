// Import the 'http' module
const http = require("http");
const url = require("url");
// Configure the server
const hostname = "127.0.0.1";
const port = 3000;
// Create the server
http.createServer((req, res) => {
    const URL= url.parse(req.url);
    console.log(URL.pathname);
    if (URL.pathname == "/home") {
      res.write("home page");
      res.end();
    } else if (URL.pathname == "/about") {
      res.write("About page");
      res.end();
    } else if (URL.pathname == "/contact-us") {
      res.write("Contact page");
      res.end();
    } else {
      res.write("404 Not Found");
      res.end();
    }
  })
  .listen(port);