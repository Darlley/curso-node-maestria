const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
  {
    name: 'p1',
    message: 'Qual a nota da prova 1? '
  },
  {
    name: 'p2',
    message: 'Qual a nota da prova 2? '
  }
]).then((answers) => {
  console.log(answers)

  const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
  console.log(chalk.bgYellow.black.bold(`A media é ${media}`))

  if(media <= 6.9){
    console.log(chalk.bgRed('Reprovado!'))
  }else{
    console.log(chalk.bgGreen('Aprovado!'))
  }
}).catch(err => console.log(err))