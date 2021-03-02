'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('ChooseUsFeatures', [
      {
        id: "11e6cb38-95c0-4223-8a8d-3baffc68a6d6",
        title: "Tank Test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3fb2db0f-7468-4306-a940-fc8ebceaefa1",
        title: "Line Test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "6cc8bf04-92b8-4ed4-8630-38e7b078f830",
        title: "Tank & Fuel Cleaning",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('ChooseUsFeatures');
  }
};
