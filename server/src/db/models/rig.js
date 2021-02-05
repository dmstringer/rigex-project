'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rig = sequelize.define('Rig', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Rig.associate = function (models) {
    Rig.hasMany(models.Well, { foreignKey: 'rigId' });
  };
  return Rig;
};
