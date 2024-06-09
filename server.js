// server.js

const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Send the response body "Hello Node!!!!"
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
