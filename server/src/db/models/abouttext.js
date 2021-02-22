'use strict';
module.exports = (sequelize, DataTypes) => {
  const AboutText = sequelize.define('AboutText', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  AboutText.associate = function(models) {
    // associations can be defined here
  };
  return AboutText;
};
