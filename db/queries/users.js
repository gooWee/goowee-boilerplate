const knex = require('../knex')

const getUsers = () => knex('users').select('email')

module.exports = { getUsers }
