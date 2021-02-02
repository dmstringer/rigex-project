const { Sequelize } = require('sequelize');

module.exports = async () => {
  return new Sequelize(process.env.SQL_CONNECTION_URL);
};
