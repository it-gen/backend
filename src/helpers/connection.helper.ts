import knex from 'knex'

function createConnection() {
  return knex({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'postgres',
      database: 'it-gen'
    }
  })
}

export { createConnection }