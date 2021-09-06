const { resolve } = require('path')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const express = require('express')
const mongoose = require('mongoose')

const schema = require('./schema')
const resolvers = require('./resolvers')

const app = express()
const port = 4000

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
)

app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:${port}/`)
)
