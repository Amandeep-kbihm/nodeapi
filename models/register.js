'use strict';
module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define('Register', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Register.associate = function(models) {
    // associations can be defined here
  };
  return Register;
};