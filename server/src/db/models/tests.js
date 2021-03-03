'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tests = sequelize.define('Tests', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false }
  });
  Tests.associate = function(models) {
    Tests.hasMany(models.TestFeatures, { foreignKey: 'TestsId' });
  };
  return Tests;
};
