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
    version: '1.0.0',
    engines: {
      npm: '8.x',
      node: '16.x'
    },
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
};
