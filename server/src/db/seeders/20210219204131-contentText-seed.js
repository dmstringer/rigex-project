'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('contentTexts', [
      {
        id: 'afd268a8-5cba-487a-9cce-12228ca8d62d',
        text:
          'Integrate seamlessly with company-wide systems including well delivery manager, well operations and accounting',
        type: 'b063378f-5ffe-4bba-99a8-e4c5134fff23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c545def4-7edb-456a-8c29-3583139d2634',
        text:
          'Configure resource and job types tailored to specific business needs',
        type: 'b063378f-5ffe-4bba-99a8-e4c5134fff23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '86552447-d073-42d1-9a49-5ff7ce2d470a',
        text: 'Monitor NPT and rig utilization metrics',
        type: 'b063378f-5ffe-4bba-99a8-e4c5134fff23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6582bdd5-0224-42fe-994f-8e6079ca5278',
        text: 'Model multiple scenarios for re-planning and re-budgeting',
        type: 'b063378f-5ffe-4bba-99a8-e4c5134fff23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'fac1544e-0245-4200-b4b8-f8d0115f245b',
        text: 'Drag and drop scheduler intuitively',
        type: 'b063378f-5ffe-4bba-99a8-e4c5134fff23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'af33dc10-e805-4074-9b1d-f74e38cbe30a',
        text: 'Drag and drop scheduler',
        type: '639b157f-7d66-424e-b7d2-343e111f3938',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '74bce30c-3cf6-4cc2-b374-fbdbca8bc1d5',
        text: 'Scenario modeling',
        type: '639b157f-7d66-424e-b7d2-343e111f3938',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b871fac9-d76a-4880-94fb-16a851957648',
        text: 'Job batching',
        type: '639b157f-7d66-424e-b7d2-343e111f3938',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2cfee44b-1f76-456d-a30e-fc26bdf7086d',
        text: 'Default mob and demob times',
        type: '639b157f-7d66-424e-b7d2-343e111f3938',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c35c479e-47e3-4247-87a9-4df5bc757cb4',
        text: 'Configurable resources',
        type: '639b157f-7d66-424e-b7d2-343e111f3938',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1150091a-5b95-432a-b3ac-909d033ff0bf',
        text: 'Subscription to reports',
        type: '639b157f-7d66-424e-b7d2-343e111f3938',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ccd95c0f-0118-4e7d-aabe-2b606b19d7bb',
        text: 'Alerts and notifications',
        type: '639b157f-7d66-424e-b7d2-343e111f3938',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '44bb6695-ef7d-410b-9010-bdc9e6a43515',
        text: 'Improved visibility of rig scheduling across the organization',
        type: '0d97de91-597d-4fa6-ab75-9d23be45b090',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '146b5e3f-95ca-471d-b769-6feb2710089a',
        text: 'User friendly scheduling',
        type: '0d97de91-597d-4fa6-ab75-9d23be45b090',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '512ec73a-c11d-4c93-aec7-f809b92684eb',
        text: 'Improved planning of capital assets',
        type: '0d97de91-597d-4fa6-ab75-9d23be45b090',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '60333d1a-35ea-4ca1-af59-a57aaa7998c9',
        text: 'Reduce budget vs actual drilling cost variance',
        type: '0d97de91-597d-4fa6-ab75-9d23be45b090',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0ac7bc9f-eac4-4ca0-9620-efde690491a4',
        text: 'Helpful scenario analysis',
        type: '0d97de91-597d-4fa6-ab75-9d23be45b090',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd842ff8e-d2fd-4364-b18d-e5cd8d1c67df',
        text: 'Accounting/ERP',
        type: '48b42027-2d7e-4225-8ddb-6b58da613a33',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '04bf2b65-736e-43ae-aadc-c04da9b4c1ff',
        text: 'Economics and reserves',
        type: '48b42027-2d7e-4225-8ddb-6b58da613a33',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6ccc0a8c-f12e-41a4-80cf-f436d9bfc245',
        text: 'Well ops/management',
        type: '48b42027-2d7e-4225-8ddb-6b58da613a33',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '585c14a2-3680-4187-932e-7b5417d39ba6',
        text: 'AFE',
        type: '48b42027-2d7e-4225-8ddb-6b58da613a33',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e8bf9116-a0cb-4dbf-8a1b-669b19b50474',
        text: 'Document management',
        type: '48b42027-2d7e-4225-8ddb-6b58da613a33',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contentTexts');
  },
};
