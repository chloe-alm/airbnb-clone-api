'use strict';
const Booking = require('../models/booking'),

  const {
    Model
  } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.TEXT,
    firstRegistration: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.Booking = User.hasMany(Booking);

  return User;
}