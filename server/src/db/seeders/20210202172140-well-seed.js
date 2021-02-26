'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Wells', [
      {
        name: '1H234T5',
        longitude: -63.0471786,
        latitude: 18.2178068,
        rigId: '12e8a014-f0d2-40e8-bfcf-8113ecb9126f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '456GJFKDS',
        longitude: -63.074586,
        latitude: 18.56323423,
        rigId: '12e8a014-f0d2-40e8-bfcf-8113ecb9126f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Wells');
  },
};
