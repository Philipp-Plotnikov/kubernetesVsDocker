const http = require('http');
const os = require('os')

const hostname = os.hostname;
const port = 3000;

const server = http.createServer((request, response) => {
  console.log(`Received request from ${request.socket.remoteAddress}`)
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end(`You've hit ${hostname}\n`);
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
