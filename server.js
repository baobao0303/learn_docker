const http = require("http");

const hostname = "localhost"; //localhost127.0.0.1
const port = 3000; // backend: port 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
//server.listen(port, hostname, callback) is the same as server.listen(port, hostname).on('listening', callback)
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// kill the server: 