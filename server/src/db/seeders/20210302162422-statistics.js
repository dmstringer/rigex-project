'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Statistics', [
      {
        id: "90c37a0d-31a2-4a2c-a3f3-0e9906493a54",
        mainText: "6000",
        subText: "Tanks annually",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b6486df1-f772-440e-a818-2f0bc4924156",
        mainText: "20000",
        subText: "Lines annually",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "62f6ac34-fd37-4ce2-8346-9f42d13b6ecb",
        mainText: "54",
        subText: "Global Partners",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ee77b593-8555-4913-9171-1db8d8beeb87",
        mainText: "4",
        subText: "Certifications",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Statistics');
  }
};
