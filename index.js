const http = require('http');
const PORT = 3000;
const host = '0.0.0.0';

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Sri Lanka!');
});

// Listen on all network interfaces (0.0.0.0) and specified port
server.listen(PORT,host, () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
