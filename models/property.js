'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    slug: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;
};