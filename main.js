

import { createServer } from 'node:http';
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
    const url = req.url
    const method = req.method
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/html');
  const menu = `
  <a href="/">Main</a>
  <a href="/second">Second</a>
  `
  if (url === '/' && method === 'GET') {
    res.end(menu + '<div class="one">Main page</div');
  }
  if (url === '/second' && method === 'GET') {
    res.end(menu + '<div class="one">Never gonna give you up</div');
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
/*C:\node-v24.21.0-win-x64\node .\lab2\main.js */