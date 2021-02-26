'use strict';
module.exports = (sequelize, DataTypes) => {
  const infrastructureTypes = sequelize.define('infrastructureTypes', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  });
  return infrastructureTypes;
};
