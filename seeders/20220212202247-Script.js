'use strict';

const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('scripts', [
      {
        scriptId: 1,
        userId: 1,
        codeScript: '<div></div>',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        scriptId: 2,
        userId: 1,
        codeScript: '<script></script>',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        scriptId: 3,
        userId: 1,
        codeScript: '<textarea></textarea>',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('scripts', {});
  }
};
