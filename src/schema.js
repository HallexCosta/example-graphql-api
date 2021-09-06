const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  input UpdateUserInput {
    id: ID
    name: String
    email: String
    isPremium: Boolean
  }

  type User {
    id: ID!
    name: String!
    email: String!
    isPremium: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: String!, data: UpdateUserInput!): User
    deleteUser(id: String!): User
  }
`)
