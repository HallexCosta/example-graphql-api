const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const { typeDefs } = require('./schema')
const resolvers = require('./resolvers')

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
} catch (e) {
  console.log(e.message)
}
