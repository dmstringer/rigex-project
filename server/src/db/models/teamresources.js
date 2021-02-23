'use strict';
module.exports = (sequelize, DataTypes) => {
  const teamResource = sequelize.define('teamResource', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    teamRole: { type: DataTypes.STRING, allowNull: false },
    commitment: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  return teamResource;
};
