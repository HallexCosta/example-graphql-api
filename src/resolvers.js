const User = require('./User')

module.exports = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id)
  },
  Mutation: {
    createUser: async (_, { name, email }) => await User.create({ name, email })
  }
}
