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
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'LeaderBoard',
      tableName: 'leaderboards'
    }
  );
  return LeaderBoard;
};
