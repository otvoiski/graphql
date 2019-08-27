const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

knex('books').insert({
    title: 'Guinness World Records',
    author: 'Harper Collins',
    publisher: 'Harper Collins Publishers',
    releaseDate: new Date(2018,01,01),
}).then(data => console.log(data))