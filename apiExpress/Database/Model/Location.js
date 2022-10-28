const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database');

class Location extends Model {};

Location.init({
  role: {
    type: DataTypes.STRING
  },
  longitude: {
    type: DataTypes.FLOAT
  },
  latitude: {
    type: DataTypes.FLOAT
  }
}, {
  sequelize,
  modelName: 'Locations',
  id: false,
  timestamps:false
})

module.exports = Location;