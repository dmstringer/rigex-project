'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('deliveryPhases', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      durationInHours: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      itemInFrontOf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      typeId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      freezeDuration: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
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
    return queryInterface.dropTable('deliveryPhases');
  },
};
