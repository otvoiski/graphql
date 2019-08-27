const db = require('../config/database')

module.exports = {
    Query: {
        async getBook(_, { id }) {
            return await db('books').where({ id }).first()
        },

        async getBooks() {
            return await db('books')
        }
    },

    Mutation: {
        async createBook(_, { input }) {
            const result = await db('books').insert({
                title: input.title,
                author: input.author,
                publisher: input.publisher,
                releaseDate: input.releaseDate
            })

            const id = result[0]
            return await db('books').where({id}).first()
        }
    }
}