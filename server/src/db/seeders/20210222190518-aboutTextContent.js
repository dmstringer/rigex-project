'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('AboutTexts', [
      {
        id: 'd296460e-cf27-4b6c-a69b-86a1b8f3d6ff',
        AboutTextTypeId: '790fb573-ad1b-432b-82a0-fbe144b3a9d2',
        text: 'About Us',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9ba4cebd-0538-4f8f-927d-3fed1d111515',
        AboutTextTypeId: '2f2184b7-4598-447a-8751-6e620e5d45c8',
        text: 'OILDROP GLOBAL Technology Suite',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '68603124-7672-46ad-a0ab-a41279ee68a9',
        AboutTextTypeId: 'ad000338-34da-4067-9d95-7d49c4670d1e',
        text: 'Using a latest technology leader in a global market in precision testing, wetsock management and fuel restoration technologies. Our expertise enables customers to achieve the tighest storage systems, lowest fuel losses and most accurate wetstock management. Customers also benefit from optimal pump speed, more precise re-strapping of guages, the highest compliance and cleanest fuel.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2318a10f-a285-4e15-9bd8-0af00551de82',
        AboutTextTypeId: '2bb9aeed-712e-459c-a480-285b81469a67',
        text: 'Tank cleaning & fuel restoration',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'bc11992d-95d7-4adb-ab3e-102a862c7d2e',
        AboutTextTypeId: '2bb9aeed-712e-459c-a480-285b81469a67',
        text: 'Tank & line testing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3ddc784f-586b-4e4d-9f9d-656e6e6d983d',
        AboutTextTypeId: '2bb9aeed-712e-459c-a480-285b81469a67',
        text: 'Wetstock management',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('AboutTexts');
  }
};
