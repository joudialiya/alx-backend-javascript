const http = require('http');

const PORT = 1245;
const app = http.createServer((_, res) => {
  const text = 'Hello Holberton School!';
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': text.length,
  });
  res.end(text);
});
app.listen(PORT);

module.exports = app;
