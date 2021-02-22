'use strict';
module.exports = (sequelize, DataTypes) => {
  const AboutText = sequelize.define('AboutText', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
    AboutTextTypeId: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  AboutText.associate = function(models) {
    AboutText.belongsTo(models.AboutTextTypes, { foreignKey: 'AboutTextTypeId' })
  };
  return AboutText;
};
