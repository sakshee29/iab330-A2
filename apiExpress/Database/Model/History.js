const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database');

class History extends Model {};

History.init({
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
  modelName: 'History',
  timestamps: false
})

module.exports = History;