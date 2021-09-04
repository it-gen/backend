import knex from 'knex'

function createConnection() {
  return knex({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'itgen',
      password: 'password',
      database: 'itgen'
    }
  })
}

export { createConnection }