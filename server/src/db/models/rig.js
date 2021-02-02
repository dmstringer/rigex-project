"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rig = sequelize.define("Rig", {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Rig.associate = function (models) {
    Rig.hasMany(models.Well);
  };
  return Rig;
};
