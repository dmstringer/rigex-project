'use strict';
module.exports = (sequelize, DataTypes) => {
  const deliveryPhase = sequelize.define(
    'deliveryPhase',
    {
      id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
      text: { type: DataTypes.STRING, allowNull: false },
      durationInHours: { type: DataTypes.INTEGER, allowNull: true },
      itemInFrontOf: { type: DataTypes.STRING, allowNull: true },
      typeId: { type: DataTypes.STRING, allowNull: false },
      freezeDuration: { type: DataTypes.BOOLEAN, allowNull: true },
    },
    {}
  );
  deliveryPhase.associate = function (models) {
    deliveryPhase.belongsTo(models.contentType, { foreignKey: 'typeId' });
  };
  return deliveryPhase;
};
