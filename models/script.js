'use strict';
const { Model } = require('sequelize');
const { sequelize, sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Script extends Model {
    static associate(models) {
      Script.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Script.init(
    {
      scriptId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      codeScript: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Script',
      tableName: 'scripts'
    }
  );
  return Script;
};
