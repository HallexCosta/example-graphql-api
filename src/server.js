const { resolve } = require('path')
const { GraphQLServer } = require('graphql-yoga')

const mongoose = require('mongoose')

const resolvers = require('./resolvers')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers
})

server.start(({ port }) =>
  console.log(`🚀 Server ready at http://localhost:${port}/`)
)
