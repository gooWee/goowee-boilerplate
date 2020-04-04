const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

console.log('node env: ', process.env.NODE_ENV)
console.log('user: ', process.env.PG_USERNAME)
console.log('password: ', process.env.PG_PASSWORD)
console.log('host: ', process.env.PG_HOST)
console.log('database: ', process.env.PG_DATABASE)
console.log('port: ', process.env.PG_PORT)

module.exports = {

  local: {
    client: 'postgresql',
    connection: `postgres://localhost/${process.env.LOCAL_DB}`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, '/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds'),
    }
  },

  development: {
    client: 'postgresql',
    connection: {
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      port: process.env.PG_PORT,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, '/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds'),
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      port: process.env.PG_PORT,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, '/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds'),
    }
  }

};
