'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaderBoard extends Model {
    static associate(models) {
      LeaderBoard.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  LeaderBoard.init(
    {
      leaderBoardId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sequelize,
      modelName: 'LeaderBoard',
      tableName: 'leaderboards'
    }
  );
  return LeaderBoard;
};
