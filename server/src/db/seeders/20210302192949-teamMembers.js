'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('TeamMembers', [
      {
        id: "3f984064-b4e2-494b-8d94-e989a30d410b",
        firstName: "Gabriel",
        lastName: "Cohen",
        position: "Chief Executive Officer",
        itemInFront: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "d46f2023-20f0-4502-8ef4-504207de09bc",
        firstName: "Sarah",
        lastName: "Jhonsen",
        position: "Product Manager",
        itemInFront: "3f984064-b4e2-494b-8d94-e989a30d410b",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2e7752c4-aca6-4102-9b88-c4c3a53717fa",
        firstName: "William",
        lastName: "Anderson",
        position: "CTO",
        itemInFront: "d46f2023-20f0-4502-8ef4-504207de09bc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "18276f78-1118-4be0-a63f-cc380e9e5fdd",
        firstName: "Amanda",
        lastName: "Jepson",
        position: "Accountant",
        itemInFront: "2e7752c4-aca6-4102-9b88-c4c3a53717fa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('TeamMembers');
  },
};
