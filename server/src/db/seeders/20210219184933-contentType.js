'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('contentTypes', [
      {
        id: 'b063378f-5ffe-4bba-99a8-e4c5134fff23',
        name: 'capabilities',
        section: 'list',
        titleColor: 'green',
        backgroundColor: 'green',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '639b157f-7d66-424e-b7d2-343e111f3938',
        name: 'features',
        section: 'list',
        titleColor: 'red',
        backgroundColor: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0d97de91-597d-4fa6-ab75-9d23be45b090',
        name: 'benefits',
        section: 'list',
        titleColor: 'red',
        backgroundColor: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '48b42027-2d7e-4225-8ddb-6b58da613a33',
        name: 'integrated systems',
        section: 'list',
        titleColor: 'red',
        backgroundColor: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e1574414-31b1-41c1-a874-71b840851b58',
        name: 'database server',
        section: 'infrastructure',
        titleColor: null,
        backgroundColor: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '244267ad-f9eb-4eef-a2e9-2afe9fbfc61d',
        name: 'web server',
        section: 'infrastructure',
        titleColor: null,
        backgroundColor: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '52d02965-ca2e-4b2a-8bae-47bedb54a473',
        name: 'pre-delivery phase',
        section: 'implementation',
        titleColor: null,
        backgroundColor: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cd52d508-0bca-4c9d-afed-f9039e1ac0f0',
        name: 'delivery phase',
        section: 'implementation',
        titleColor: null,
        backgroundColor: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contentTypes');
  },
};
