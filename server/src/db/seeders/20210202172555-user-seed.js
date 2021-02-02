'use strict';
const uuidv4 = require('uuid').v4;

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        email: 'john.doe@gmail.com',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users');
  },
};
