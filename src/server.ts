import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import { BookResolver } from './resolvers/BookResolver'

async function main() {
  await createConnection()
  const schema = await buildSchema({
    resolvers: [BookResolver] // add this
  })
  const server = new ApolloServer({ schema })
  const { url } = await server.listen(4000)
  console.log(`🚀 Server ready at ${url}`)
}

main()
