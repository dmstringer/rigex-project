'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Services', [
      {
        id: 'ebf3fddf-0f62-4a11-8937-43da4b68c276',
        title: 'Cleaning',
        itemInFront: null,
        description: 'Tank cleaning & fuel restoration',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '314f78a3-22c8-41ab-b634-500499febf9a',
        title: 'Testing',
        itemInFront: 'ebf3fddf-0f62-4a11-8937-43da4b68c276',
        description: 'Tank & Line Testing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5923c6e3-a971-4130-a9be-d5c5fbf12a40',
        title: 'Wetstock',
        itemInFront: '314f78a3-22c8-41ab-b634-500499febf9a',
        description: 'Wetstock Management',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Services');
  }
};
