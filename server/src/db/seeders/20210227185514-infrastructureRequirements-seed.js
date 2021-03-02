'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('infrastructureRequirements', [
      {
        id: 'b9ed8d75-d9c5-40af-a58a-b12cecbc00e5',
        title: '32 GB RAM',
        hasDrives: false,
        type: '49d3f000-e4df-4cae-ae49-94a012cf5054',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9185ad27-6226-4735-9b8f-614d1a5089fe',
        title: '2x4 3.0 GHz CPU',
        hasDrives: false,
        type: '49d3f000-e4df-4cae-ae49-94a012cf5054',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f9d0173c-4c15-4f8f-90aa-632971fde2ba',
        title: 'Win 2012 x64',
        hasDrives: false,
        type: '49d3f000-e4df-4cae-ae49-94a012cf5054',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '85a90bd5-8602-4b9e-a7d4-a4eb3d74ccd0',
        title: 'SQL 2012 R2 Ent. Edition x64 (SQLDB, SSIS, SSAS)',
        hasDrives: false,
        type: '49d3f000-e4df-4cae-ae49-94a012cf5054',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8e6c9387-a075-46ee-acd8-faf33895f666',
        title: 'Disk Drives:',
        hasDrives: true,
        type: '49d3f000-e4df-4cae-ae49-94a012cf5054',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c7909e7c-9a02-47d2-8448-c2b6392a9d34',
        title: '8 GB RAM',
        hasDrives: false,
        type: 'e4dbbfc3-2a17-4e51-82d4-d185e974239f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '752753fc-975c-4ed7-b3c2-e9b99117d466',
        title: '2x43.0 GHz CPU',
        hasDrives: false,
        type: 'e4dbbfc3-2a17-4e51-82d4-d185e974239f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a9e0fad6-f6db-4d1f-85d6-96df94f44d66',
        title: 'Win 2012 R2 x64',
        hasDrives: false,
        type: 'e4dbbfc3-2a17-4e51-82d4-d185e974239f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '462b9b1a-4a6a-464e-b026-535b8af0ede9',
        title: 'IIS/.NET 4.0',
        hasDrives: false,
        type: 'e4dbbfc3-2a17-4e51-82d4-d185e974239f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '90f14294-2f57-4f00-bbc8-221d0c55a350',
        title: 'RabbitMQ',
        hasDrives: false,
        type: 'e4dbbfc3-2a17-4e51-82d4-d185e974239f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3b4c5502-7047-40ce-9159-9ba890b06cb1',
        title: 'Disk Drives:',
        hasDrives: true,
        type: 'e4dbbfc3-2a17-4e51-82d4-d185e974239f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('infrastructureRequirements');
  },
};
