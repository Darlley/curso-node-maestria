const chalk = require('chalk')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
const nota = args['nota']

if(nota <= 6.9){
  console.log(chalk.bgRed.bold("Infelizmente você esta reprovado!"));
  console.log(chalk.red("Você precisa fazer a prova novamente."));
}else if(nota > 6.9){
  console.log(chalk.bgGreen("Parabéns, você esta aprovado!"));
  console.log(chalk.green("Curta suas férias"));
}

console.log(chalk.bold("Obrigado!"));