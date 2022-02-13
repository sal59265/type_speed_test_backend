require('dotenv').config();
module.exports = {
  development: {
    database: 'typing_test1',
    dialect: 'postgres'
  },
  test: {
    database: 'database_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
};
