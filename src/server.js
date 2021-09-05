const { GraphQLServer } = require('graphql-yoga')
const { resolve } = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers
})

server.start()
