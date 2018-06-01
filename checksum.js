const operations = require('operations.js');

const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  
  const matches = operations.validateChecksum('donald-duck.png');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${matches ? 'The checksums matches!' : 'The checksums doesn\'t match.'}`);
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});

