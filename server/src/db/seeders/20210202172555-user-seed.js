'use strict';
const uuidv4 = require('uuid').v4;
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface) => {
    const salt = bcrypt.genSaltSync(10);

    return queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        email: 'john.doe@gmail.com',
        password: bcrypt.hashSync('1234', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users');
  },
};
