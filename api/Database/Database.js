const { Sequelize } = require('sequelize');
// Set up sequilize 
const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  storage: 'room.db'
})

module.exports = sequelize;