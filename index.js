const inquirer = require('inquirer');
const chalk = require('chalk');

const fs = require('fs');

function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          'Criar conta',
          'Consultar saldo',
          'Depositar',
          'Sacar',
          'Sair',
        ],
      },
    ])
    .then((answer) => {
      const action = answer['action'];

      if (action === 'Criar conta') return createAccount();
      if (action === 'Consultar saldo') return getAccountBalance();
      if (action === 'Depositar') return deposit();
      if (action === 'Sacar') return withDraw();

      let pontos = '';
      const logCarregamento = () => {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        pontos += '.';
        process.stdout.write(`Finalizando${pontos}`);

        if (pontos.length === 3) {
          setTimeout(() => {
            console.log(
              chalk.bgBlue.white('\nObrigado por usar o Accounts...')
            );
            process.exit();
          }, 2000);
        } else {
          setTimeout(logCarregamento, 1000);
        }
      };
      logCarregamento();
    })
    .catch((error) => console.log(error));
}

function createAccount() {
  console.log(
    '🎉 ' + chalk.bgGreen.black('Parabéns por escolher o nosso banco!')
  );
  console.log('⬇️  ' + chalk.green('Defina as opções da sua conta a seguir'));

  buildAccount();
}

function buildAccount() {
  const structureFile = {
    balance: 0,
  };

  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Digite o nome da sua conta: ',
      },
    ])
    .then((answer) => {
      const accountName = answer.accountName;

      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts');
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log('🔴 ' + chalk.bgRed.black('Esta conta já existe!'));
        return buildAccount();
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(structureFile),
        (err) => {
          console.log(err);
        }
      );

      console.log(
        '🎉 Sua conta ' +
          chalk.bgGreen.black(accountName) +
          ' foi criada com sucesso!'
      );

      operation();
    })
    .catch((error) => console.log(error));
}

function deposit() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((answer) => {
      const accountName = answer.accountName;

      if (!accountExists(accountName)) {
        return createAccountOrDeposit();
      }

      console.log(accountName);
      ammount(accountName);
    })
    .catch((err) => console.log(err));
}

function accountExists(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Esta conta não existe!'));
    return false;
  }

  return true;
}

function createAccountOrDeposit(accountName) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: ['Criar conta', 'Depositar', 'Sair'],
      },
    ])
    .then((answer) => {
      const action = answer['action'];

      if (action === 'Criar conta') return createAccount();
      if (action === 'Depositar') return deposit();
      if (action === 'Sacar') return createAccount();

      let pontos = '';
      const logCarregamento = () => {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        pontos += '.';
        process.stdout.write(`Finalizando${pontos}`);

        if (pontos.length === 3) {
          setTimeout(() => {
            console.log(
              chalk.bgBlue.white('\nObrigado por usar o Accounts...')
            );
            process.exit();
          }, 2000);
        } else {
          setTimeout(logCarregamento, 1000);
        }
      };
      logCarregamento();
    })
    .catch((error) => console.log(error));
}

function ammount(accountName) {
  inquirer
    .prompt([
      {
        name: 'ammount',
        message: 'Quantos R$ você deseja depositar?',
      },
    ])
    .then((answer) => {
      const ammount = answer.ammount;

      addAmmount(accountName, ammount);
      operation();
    })
    .catch((error) => console.log(error));
}

function addAmmount(accountName, ammount) {
  const accountData = getAccount(accountName);

  if (!ammount) {
    console.log(chalk.bgRed.black('Ammount não foi definido...'));
    return deposit();
  }

  accountData.balance = parseFloat(accountData.balance) + parseFloat(ammount);

  updatedBalance(accountName, accountData, ammount);
  console.log(chalk.green(`Depósito de R$${ammount} realizado com sucesso!`));
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'UTF-8',
    flag: 'r',
  });

  return JSON.parse(accountJSON);
}

function updatedBalance(accountName, data) {
  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(data),
    (err) => {
      console.log(err);
      return operation();
    }
  );
}

function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((answer) => {
      const accountName = answer.accountName;

      if (!accountExists(accountName)) {
        return getAccountBalance();
      }

      const accountData = getAccount(accountName);

      console.log(
        chalk.bgBlue.white(
          `Olá! O saldo da sua conta é de R$${accountData.balance}`
        )
      );
      return operation();
    })
    .catch((error) => console.log(error));
}

function withDraw() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((answer) => {
      const accountName = answer.accountName;

      if (!accountExists(accountName)) {
        return withDraw();
      }

      removeAmmount(accountName)
    })
    .catch((err) => console.log(err));
}

function removeAmmount(accountName){
  inquirer
    .prompt([
      {
        name: 'ammount',
        message: 'Qual valor você deseja sacar? R$',
      },
    ])
    .then((answer) => {
      const ammount = answer.ammount;
      removeBalance(accountName, ammount);
      return operation();
    })
    .catch((err) => console.log(err));
}

function removeBalance(accountName, ammount) {
  const accountData = getAccount(accountName);

  if (!ammount) {
    console.log(chalk.bgRed.white('Ops, ocorreu um erro! Tente novamente...'))
    return removeAmmount(accountName)
  }

  if(accountData.balance < ammount){
    console.log(chalk.bgBlue.white('Saldo insuficiente!'))
    return removeAmmount(accountName)
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(ammount)
  updatedBalance(accountName, accountData)
  console.log(chalk.green(`Saque de R$${ammount} realizado com sucesso!`));
}

operation();
