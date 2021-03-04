'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Tests', [
      {
        id: "8793c5e8-ce2d-4db1-9779-0930d14b6bb1",
        title: "Tank Testing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "0ce95112-c96c-4691-8a7d-96bff68b0f24",
        title: "Line Testing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Tests')
  }
};
