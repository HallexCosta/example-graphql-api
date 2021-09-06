const User = require('./User')

module.exports = {
  Query: {
    users: async () => User.find(),
    user: async (_, { id }) => User.findById(id)
  },
  Mutation: {
    createUser: async (_, { name, email }) =>
      await User.create({ name, email, isPremium: false }),

    updateUser: async (_, { id, data }) => {
      const user = User.findById(id)

      if (!user) throw new Error('User not found!')

      const updatedUser = User.findByIdAndUpdate(id, data, {
        new: true
      })

      return updatedUser
    },

    deleteUser: async (_, { id }) => {
      const user = User.findById(id)

      if (!user) throw new Error('User not found!')

      const deleteUser = User.findByIdAndDelete(id)

      return deleteUser
    }
  }
}
