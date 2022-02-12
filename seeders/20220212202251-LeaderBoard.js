'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('leaderboards', [
      {
        leaderBoardId: 1,
        userId: 1
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('leaderboards', null, {});
  }
};
