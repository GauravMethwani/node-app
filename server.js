// Import the 'http' module
const http = require("http");
const url = require("url");
// Configure the server
const hostname = "127.0.0.1";
const port = 3000;
// Create the server
http.createServer((req, res) => {
    res.write("Home-Page");
    res.end();
  })
  .listen(port);