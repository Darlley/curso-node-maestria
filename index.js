// none

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split("=")[1]

console.log(nome)

const idade = args[1].split("=")[1]

console.log(idade)

console.log(`Nome dele é ${nome}, e tem ${idade} anos`)

// node index.js nome=Darlley idade=30