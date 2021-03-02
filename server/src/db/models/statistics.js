'use strict';
module.exports = (sequelize, DataTypes) => {
  const Statistics = sequelize.define('Statistics', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    mainText: { type: DataTypes.STRING, allowNull: false },
    subText: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  return Statistics;
};
