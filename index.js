const fs = require('fs');
const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  if (filename.includes('html')) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else {
      console.log('404')
    }
  }
});

server.listen(port, () => {
  console.log("http://localhost:" + port)
})