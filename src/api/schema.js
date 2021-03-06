const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const booksAttribs = `
    id: ID
    title: String!
    author: String!
    publisher: String!
    releaseDate: DateTime!
`

const typeDefs = `
    scalar DateTime

    type Book {
        ${booksAttribs}
    }

    type Query {
        getBook(id: ID!): Book
        getBooks: [Book]
    }

    input BookInput {
        ${booksAttribs}
    }

    type Mutation {
        createBook(input: BookInput): Book
    }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })