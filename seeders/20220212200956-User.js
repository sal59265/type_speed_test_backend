'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        userId: 1,
        name: 'soul',
        password: 'soul',
        wpm: 0,
        accuracy: 0
      },
      {
        userId: 2,
        name: 'rob',
        password: 'rob',
        wpm: 0,
        accuracy: 0
      },
      {
        userId: 1,
        name: 'vlad',
        password: 'vlad',
        wpm: 0,
        accuracy: 0
      },
      {
        userId: 1,
        name: 'marvel',
        password: 'marvel',
        wpm: 0,
        accuracy: 0
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
