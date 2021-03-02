'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('serverDrives', [
      {
        id: '51324abb-f547-4fe9-a209-bdb993eda9e7',
        infrastructureRequirementFk: '8e6c9387-a075-46ee-acd8-faf33895f666',
        diskDriveFk: '35793ec2-c53e-434b-8d94-041775be3f92',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a4efaea2-217e-4fe4-b093-30f00c7c3f71',
        infrastructureRequirementFk: '8e6c9387-a075-46ee-acd8-faf33895f666',
        diskDriveFk: '85753c7e-4a07-44ac-b78e-bcf1fb821013',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3270461a-394b-4d57-a5a0-cc1a919c19b5',
        infrastructureRequirementFk: '8e6c9387-a075-46ee-acd8-faf33895f666',
        diskDriveFk: '1de93dd0-eeeb-432d-9bbe-c83a714057d8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '893f9fcb-a200-47e1-b1f2-e37f7785e648',
        infrastructureRequirementFk: '8e6c9387-a075-46ee-acd8-faf33895f666',
        diskDriveFk: 'f7ae2784-8a51-487a-8ee7-13511669262d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5d0506ec-0ec4-44b7-8634-bc1f8a803461',
        infrastructureRequirementFk: '3b4c5502-7047-40ce-9159-9ba890b06cb1',
        diskDriveFk: 'c3c26883-5ceb-4e61-9ca5-3bf3003f3303',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b8106cc1-f5f8-47ac-b95c-da81b4cb8ce0',
        infrastructureRequirementFk: '3b4c5502-7047-40ce-9159-9ba890b06cb1',
        diskDriveFk: '6155247f-0689-48d7-bbbd-db6e4d9da5b4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('serverDrives');
  },
};
