'use strict';
module.exports = (sequelize, DataTypes) => {
  const infrastructureTypes = sequelize.define('infrastructureTypes', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  infrastructureTypes.associate = function (models) {
    infrastructureTypes.hasMany(models.infrastructureRequirements, {
      foreignKey: 'type',
    });
  };
  return infrastructureTypes;
};
