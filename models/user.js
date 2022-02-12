'use strict';
const { Model } = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Script, {
        foreignKey: 'userId',
        as: 'scripts',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
        User.hasMany(models.LeaderBoard, {
          foreignKey: 'userId',
          as: 'leaderboards',
          onDelete: 'cascade',
          onUpdate: 'cascade'
        });
    }
  }
  User.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      wpm: DataTypes.INTEGER,
      accuracy: DataTypes.INTEGER,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
