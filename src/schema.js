const { gql } = require('apollo-server')

module.exports.typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    isPremium: Boolean!
  }

  input UpdateUser {
    name: String
    email: String
    isPremium: Boolean
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: String!, data: UpdateUser!): User
    deleteUser(id: String!): User
  }
`
