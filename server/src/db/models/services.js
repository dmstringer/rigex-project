'use strict';
module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define('Services', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    itemInFront: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  Services.associate = function(models) {
    Services.hasMany(models.ServiceFeatures, { foreignKey: 'ServiceId' })
  };
  return Services;
};
