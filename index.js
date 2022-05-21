const minimist = require('minimist')

// modulo externo

// mmodulo interno
const somar = require('./soma').soma


const args = minimist(process.argv.slice(2))

console.log(args)

const a = parseInt(args["a"])
const b = parseInt(args["b"])

somar(a,b)