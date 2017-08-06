// const options = {
//   query: (e) => {
//     console.log(e.query);
//   },
// };

// const pgp = require('pg-promise')(options);

// function setDatabase() {
//   if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
//     return pgp({
//       database: 'my_rating_dev',
//       port: 5432,
//       host: 'localhost',
//     });
//   } else if (process.env.NODE_ENV === 'production') {
//     return pgp(process.env.DATABASE_URL);
//   }
// }

// const db = setDatabase();

// module.exports = db;


//setting for heroku

const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'adaquote_development',
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;