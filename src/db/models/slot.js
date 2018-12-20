'use strict';
module.exports = (sequelize, DataTypes) => {
  const Slot = sequelize.define('Slot', {
    activity: DataTypes.INTEGER,
    funky: DataTypes.STRING
  }, {});
  Slot.associate = function(models) {
    // associations can be defined here
  };
  return Slot;
};