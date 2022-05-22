const http = require('http')
const port = 3000

const code = `
<div>
  <h1>Core Modules</h1>
</div>
`

const server = http.createServer((req,res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(code)
})

server.listen(port, () => {
  console.log("Sua aplicação esta disponível em http://localhost:%s", port)
})