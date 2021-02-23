'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ServiceFeatures', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      ServiceId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      itemInFront: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('ServiceFeatures');
  }
};
