'use strict';
module.exports = (sequelize, DataTypes) => {
  const diskDrive = sequelize.define('diskDrive', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    title: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  diskDrive.associate = function (models) {
    diskDrive.hasOne(models.serverDrive, { foreignKey: 'diskDriveFk' });
  };
  return diskDrive;
};
