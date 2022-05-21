const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']

console.log(nome)

const profissao = args['profissao']

console.log(profissao)

console.log(`O ${nome} é ${profissao}`)

// node index.js --nome=Darlley --profissao=Desenvolvedo