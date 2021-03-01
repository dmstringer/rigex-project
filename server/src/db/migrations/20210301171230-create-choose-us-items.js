'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ChooseUsItems', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      ChooseUsFeaturesId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      itemInFront: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('ChooseUsItems');
  }
};
