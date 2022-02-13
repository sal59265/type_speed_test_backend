'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        userId: 1,
        name: 'grant',
        password: 'grant',
        wpm: 1500,
        accuracy: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'rob',
        password: 'rob',
        wpm: 0,
        accuracy: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'vlad',
        password: 'vlad',
        wpm: 0,
        accuracy: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'marvel',
        password: 'marvel',
        wpm: 0,
        accuracy: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
