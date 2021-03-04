'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('deliveryPhases', [
      {
        id: '5b358202-9954-42a7-a7b3-34f31ebea82f',
        text:
          'Infrastructure Setup: Hardware, network, SLT, users accounts and groups, automated accounts, access permissions',
        durationInHours: null,
        itemInFrontOf: null,
        typeId: '52d02965-ca2e-4b2a-8bae-47bedb54a473',
        freezeDuration: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cd0c9ac7-b2da-4044-9d42-05918498c805',
        text: 'Product Deployment',
        durationInHours: 40,
        itemInFrontOf: '4e15ac56-5f30-417f-a6a6-677aced06dbb',
        typeId: 'cd52d508-0bca-4c9d-afed-f9039e1ac0f0',
        freezeDuration: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4e15ac56-5f30-417f-a6a6-677aced06dbb',
        text: 'Configuration',
        durationInHours: 80,
        itemInFrontOf: '5b2add67-9ef7-4e0f-a3a6-6b9df558acdf',
        typeId: 'cd52d508-0bca-4c9d-afed-f9039e1ac0f0',
        freezeDuration: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5b2add67-9ef7-4e0f-a3a6-6b9df558acdf',
        text: 'Integration &amp; Customisation',
        durationInHours: 120,
        itemInFrontOf: 'cbc89e45-e209-48eb-a667-48253adb89ff',
        typeId: 'cd52d508-0bca-4c9d-afed-f9039e1ac0f0',
        freezeDuration: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cbc89e45-e209-48eb-a667-48253adb89ff',
        text: 'UAT',
        durationInHours: 80,
        itemInFrontOf: '7ae6bac8-7287-43a0-80fb-6dc4a5c111aa',
        typeId: 'cd52d508-0bca-4c9d-afed-f9039e1ac0f0',
        freezeDuration: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7ae6bac8-7287-43a0-80fb-6dc4a5c111aa',
        text: 'Admin Training',
        durationInHours: 20,
        itemInFrontOf: '39dde71b-19b3-48ea-8431-daa9a65a26ab',
        typeId: 'cd52d508-0bca-4c9d-afed-f9039e1ac0f0',
        freezeDuration: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '39dde71b-19b3-48ea-8431-daa9a65a26ab',
        text: 'End User Training',
        durationInHours: 20,
        itemInFrontOf: null,
        typeId: 'cd52d508-0bca-4c9d-afed-f9039e1ac0f0',
        freezeDuration: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('deliveryPhases');
  },
};
