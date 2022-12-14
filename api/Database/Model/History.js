const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database');

// Model for the History table
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
  modelName: 'Histories',
  timestamps: false
})

module.exports = History;