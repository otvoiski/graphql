const db = require('../config/database')

module.exports = {
    Query: {
        async getBook(_, { id }) {
            return await db('books')
                .where({ id })
                    .first()
        }
    }
}