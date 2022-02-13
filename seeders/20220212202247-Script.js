'use strict';

const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('scripts', [
      {
        scriptId: 1,
        userId: 1,
        codeScript: `var isPalindrome = function (x) {
          let reversed = ''
          let xStr = x.toString()
          for (let i of xStr) {
            reversed = i + reversed
          }
          return reversed === xStr
        }
        `,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        scriptId: 2,
        userId: 1,
        codeScript: `function highestRank(arr) {
          let freq = 0
          let highNum = 0
          arr.sort()
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
              freq = freq + 1
            }
          }
        }
        `,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        scriptId: 3,
        userId: 1,
        codeScript: `const twoSum = (nums, target) => {
          for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
              if (nums[i] + nums[j] === target) {
              }
            }
          }
        };
        `,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('scripts', {});
  }
};
