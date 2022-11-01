const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  storage: 'room.db'
})

module.exports = sequelize;