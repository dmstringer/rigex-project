"use strict";
const uuidv4 = require("uuid").v4;

module.exports = (sequelize, DataTypes) => {
  const Well = sequelize.define(
    "Well",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuidv4(),
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      rigId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Well.associate = function (models) {
    Well.belongsTo(models.Rig, {foreignKey: 'rigId'})
  };
  return Well;
};
