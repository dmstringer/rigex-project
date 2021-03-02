'use strict';
module.exports = (sequelize, DataTypes) => {
  const serverDrive = sequelize.define(
    'serverDrive',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      infrastructureRequirementFk: { type: DataTypes.STRING, allowNull: false },
      diskDriveFk: { type: DataTypes.STRING, allowNull: false },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
    },
    {}
  );
  serverDrive.associate = function (models) {
    serverDrive.belongsTo(models.infrastructureRequirements, {
      foreignKey: 'infrastructureRequirementFk',
    });
    serverDrive.belongsTo(models.diskDrive, {
      foreignKey: 'diskDriveFk',
    });
  };
  return serverDrive;
};
