'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('AboutTextTypes', [
      {
        id: '790fb573-ad1b-432b-82a0-fbe144b3a9d2',
        type: 'title',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2f2184b7-4598-447a-8751-6e620e5d45c8',
        type: 'subtitle',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ad000338-34da-4067-9d95-7d49c4670d1e',
        type: 'description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2bb9aeed-712e-459c-a480-285b81469a67',
        type: 'list item',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('AboutTextTypes');
  }
};
