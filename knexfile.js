const dotenv = require('dotenv').config();

module.exports = {
    
    client: 'pg',
      connection: {
        host:process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        charset: 'utf8'
      },
      migrations: {
        directory: './knex/migrations',
      },
      seeds: {
        directory: './knex/seeds'
      }
    
  };

  // module.exports = {
//     connection: process.env.DB_CONNECTION,
//     pg: {
//         client: "pg",
//         connection: {
//             host:process.env.DB_HOST,
//             port: process.env.DB_PORT,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_DATABASE
//         }
//     }
    
// };