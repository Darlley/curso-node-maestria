const inquirer = require('inquirer')
const chalk = require('chalk')


inquirer.prompt([
  {
    name: 'nome',
    message: chalk.bgYellow.black('Qual o seu nome? ')
  },
  {
    name: 'idade',
    message: chalk.bgYellow.black('Qual a sua idade? ')
  }
]).then((answers) => {
  const idade = parseInt(answers.idade)
  
  if(!Number.isInteger(idade)){
    throw new Error("A idade precisa ser um número!")
  }

  console.log(chalk.bgGreen(`Olá ${answers.nome}, você tem ${idade} idade`))
}).catch((error) => {
  console.log(chalk.bgRed("Erro: ", error))
})