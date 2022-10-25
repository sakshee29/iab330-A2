const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database');

class PeopleCounter extends Model {};

PeopleCounter.init({
  room: {
    type: DataTypes.INTEGER
  },
  counter: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'PeopleCounters',
  timestamps: false
})

module.exports = PeopleCounter;