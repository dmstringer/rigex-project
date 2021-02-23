'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teamResources', [
      {
        id: 'da821f91-a759-4d96-ae0c-6dfc03f51daa',
        teamRole: 'Project Manager',
        commitment: '5-8 Hours / Duration',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3a866419-ec4c-49bb-a3f7-4f44b474f581',
        teamRole: 'Infrastrucrure Admin',
        commitment: '5 Hours/ Week 1-4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5dd53e47-3661-454f-bf1f-4518106f2350',
        teamRole: 'SME (s)',
        commitment: '5 Hours/ Week 1-4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4d0f6fae-6d3e-4c51-97e6-5af38c43322c',
        teamRole: 'Admin Trainer',
        commitment: '16 Hours/ Week 9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '82c574e7-0b94-42f8-bb82-7d5edf2a8edd',
        teamRole: 'End User Trainer',
        commitment: '4 Hours/ Week 10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teamResources');
  },
};
