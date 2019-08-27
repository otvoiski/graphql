const express = require('express')
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')

const app = express()
app.use('/api', graphqlHttp({
    schema,
    graphiql: true
}))


app.listen(4000, () => console.log('Executing...'))