'use strict';
module.exports = (sequelize, DataTypes) => {
  const TestFeatures = sequelize.define('TestFeatures', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
    TestsId: { type: DataTypes.STRING, allowNull: false }
  });
  TestFeatures.associate = function(models) {
    TestFeatures.belongsTo(models.Tests, { foreignKey: 'TestsId' });
  };
  return TestFeatures;
};
