'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeamMembers = sequelize.define('TeamMembers', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    position: { type: DataTypes.STRING, allowNull: false },
    itemInFront: { type: DataTypes.STRING, allowNull: true },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  return TeamMembers;
};
