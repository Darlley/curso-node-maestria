const http = require('http')
const url = require('url')
const port = 3000

const form = `
<form method="GET">
    <input type="text" name="first" id="">
    <button type="submit">Enviar</button>
</form>
`

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true)
  const name = urlInfo.query.first

  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  
  if(!name){
    res.end(form)
    return
  }

  res.end(`<h1>Seja bem vindo, ${name}</h1>`)

})
server.listen(port, () => {
  console.log("Servidor http://localhost:%s", port)
})