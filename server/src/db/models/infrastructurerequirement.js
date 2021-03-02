'use strict';
module.exports = (sequelize, DataTypes) => {
  const infrastructureRequirements = sequelize.define(
    'infrastructureRequirements',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      title: { type: DataTypes.STRING, allowNull: false },
      hasDrives: { type: DataTypes.BOOLEAN, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
    },
    {}
  );
  infrastructureRequirements.associate = function (models) {
    infrastructureRequirements.hasOne(models.serverDrive, {
      foreignKey: 'infrastructureRequirementFk',
    });
  };
  return infrastructureRequirements;
};
