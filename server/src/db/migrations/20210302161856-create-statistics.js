'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Statistics', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      mainText: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subText: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Statistics');
  }
};
