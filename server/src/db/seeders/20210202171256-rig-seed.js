"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Rigs", [
      {
        id: "12e8a014-f0d2-40e8-bfcf-8113ecb9126f",
        name: "Big Papa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Rigs");
  },
};
