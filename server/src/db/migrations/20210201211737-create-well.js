'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Wells', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      longitude: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      latitude: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      rigId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Wells');
  },
};
