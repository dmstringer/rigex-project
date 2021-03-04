'use strict';
module.exports = (sequelize, DataTypes) => {
  const contentType = sequelize.define('contentType', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    section: { type: DataTypes.STRING, allowNull: false },
    titleColor: { type: DataTypes.STRING, allowNull: false },
    backgroundColor: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  contentType.associate = function (models) {
    contentType.hasMany(models.contentText, { foreignKey: 'type' });
    contentType.hasMany(models.deliveryPhase, { foreignKey: 'typeId' });
  };
  return contentType;
};
