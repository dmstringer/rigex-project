'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceFeatures = sequelize.define('ServiceFeatures', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    ServiceId: { type: DataTypes.STRING, allowNull: false },
    itemInFront: { type: DataTypes.STRING, allowNull: true },
    text: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  ServiceFeatures.associate = function(models) {
    ServiceFeatures.belongsTo(models.Services, { foreignKey: 'ServiceId' })
  };
  return ServiceFeatures;
};
