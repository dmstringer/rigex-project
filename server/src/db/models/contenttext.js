'use strict';
module.exports = (sequelize, DataTypes) => {
  const contentText = sequelize.define(
    'contentText',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      text: { type: DataTypes.TEXT, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
    },
    {}
  );
  contentText.associate = function (models) {
    contentText.belongsTo(models.contentType, { foreignKey: 'type' });
  };
  return contentText;
};
