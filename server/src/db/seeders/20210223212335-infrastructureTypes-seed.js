'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('infrastructureTypes', [
      {
        id: '49d3f000-e4df-4cae-ae49-94a012cf5054',
        name: 'database server',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e4dbbfc3-2a17-4e51-82d4-d185e974239f',
        name: 'web server',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('infrastructureTypes');
  },
};
