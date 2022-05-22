const http = require('http')
const port = 3000

const server = http.createServer((req,res) => {
  res.write("Core Module http")
  res.end()
})

server.listen(port, () => {
  console.log("Sua aplicação esta disponível em http://localhost:%s", port)
})