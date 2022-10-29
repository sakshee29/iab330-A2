const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database');

class PeopleCounter extends Model {};

PeopleCounter.init({
  roomNo: {
    type: DataTypes.INTEGER
  },
  count: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'PeopleCounters',
  timestamps: false
})

module.exports = PeopleCounter;