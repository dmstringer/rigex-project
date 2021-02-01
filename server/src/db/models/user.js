'use strict';
const uuidv4 = require('uuid').v4;
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.STRING, primaryKey: true, defaultValue: uuidv4() },
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  return User;
};
