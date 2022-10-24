const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database');

class PeopleCounter extends Model {};

PeopleCounter.init({
  role: {
    type: DataTypes.STRING
  },
  entry: {
    type: DataTypes.STRING
  },
  exit: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'PeopleCounter',
  timestamps: false
})

module.exports = PeopleCounter;