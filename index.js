const url = require('url')
const address = "https://www.google.com/search?q=google"
const parsUrl = new url.URL(address)

console.log(parsUrl.host)
console.log(parsUrl.pathname)
console.log(parsUrl.search)
console.log(parsUrl.searchParams)
console.log(parsUrl.searchParams.get('q'))