'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('ChooseUs', [
      {
        id: "97771bac-56c6-4f81-bfb9-3a44db4e4487",
        title: "Why choose us?",
        description: "OilDrop Global's precision tank and line test is the world's fastest, most accurate method of leak detection. Using the very latest technology, there is no leak scenario our test cannont detect. Certified to US-EPS standards, it's the most advanced, practical and reliable test available. Our technicians can better diagnose problems including the smallest leaks, water ingress and equipment issues, so any repairs or rectification can be made sooner. And we can be off your forecourt quicker.",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('ChooseUs');
  }
};
