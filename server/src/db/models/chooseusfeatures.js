'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChooseUsFeatures = sequelize.define('ChooseUsFeatures', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  ChooseUsFeatures.associate = function(models) {
    ChooseUsFeatures.hasMany(models.ChooseUsItems, { foreignKey: 'ChooseUsFeaturesId' })
  };
  return ChooseUsFeatures;
};
