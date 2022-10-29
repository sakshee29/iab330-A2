const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  host: process.env.DATABASE_PATH
})

module.exports = sequelize;