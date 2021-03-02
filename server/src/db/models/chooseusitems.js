'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChooseUsItems = sequelize.define('ChooseUsItems', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    ChooseUsFeaturesId: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
    itemInFront: { type: DataTypes.STRING, allowNull: true },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  ChooseUsItems.associate = function(models) {
    ChooseUsItems.belongsTo(models.ChooseUsFeatures, { foreignKey: 'ChooseUsFeaturesId' })
  };
  return ChooseUsItems;
};
