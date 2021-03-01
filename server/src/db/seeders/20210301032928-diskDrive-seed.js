'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('diskDrives', [
      {
        id: 'c3c26883-5ceb-4e61-9ca5-3bf3003f3303',
        title: 'C Drive (OS) - 100 GB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '85753c7e-4a07-44ac-b78e-bcf1fb821013',
        title: 'D Drive (Data) -250 GB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1de93dd0-eeeb-432d-9bbe-c83a714057d8',
        title: 'E Drive (SQL Log/ Temp) - 50 GB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f7ae2784-8a51-487a-8ee7-13511669262d',
        title: 'G Drive (Backups) - 50 GB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '35793ec2-c53e-434b-8d94-041775be3f92',
        title: 'C Drive (OS) - 100 GB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6155247f-0689-48d7-bbbd-db6e4d9da5b4',
        title: 'D Drive (Data) - 100 GB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('diskDrives');
  },
};
