const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodemvc', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
  console.log("MySQL Conectado!")
} catch (error) {
  console.log(`Não foi possível conectar. ${error}`)
}

module.exports = sequelize