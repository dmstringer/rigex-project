'use strict';
module.exports = (sequelize, DataTypes) => {
  const AboutTextTypes = sequelize.define('AboutTextTypes', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  AboutTextTypes.associate = function(models) {
    AboutTextTypes.hasMany(models.AboutText, { foriegnKey: 'AboutTextTypeId' });
  };
  return AboutTextTypes;
};
