const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  host: '../../data/room.db'
})

module.exports = sequelize;