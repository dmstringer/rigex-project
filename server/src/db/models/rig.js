'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rig = sequelize.define('Rig', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  });
  Rig.associate = function (models) {
    Rig.hasMany(models.Well, { foreignKey: 'rigId' });
  };
  return Rig;
};
