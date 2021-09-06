const User = require('./User')

module.exports = {
  users: async () => await User.find(),
  user: ({ id }) => User.findById(id),
  createUser: ({ name, email }) =>
    User.create({ name, email, isPremium: false }),
  updateUser: ({ id, data }) => User.findByIdAndUpdate(id, data, { new: true }),
  deleteUser: ({ id, data }) => User.findByIdAndDelete(id, data)
}
