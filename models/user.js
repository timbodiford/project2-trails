
const mongoose = require('./connection.js')



const UserSchema = new mongoose.Schema({
 userName: {
   type: String,
   required: true,
 },
  firstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
})


const UserCollection = mongoose.model('User', UserSchema)



function getUsers() {
  return UserCollection.find()
}

function addUser(userObject) {
  return UserCollection.create(userObject)
}

function getUser(userId) {
  return UserCollection.findById(userId)
}

function deleteUser(userId) {
  return UserCollection.findByIdAndDelete(userId)
}

function editUser(userId, userObject) {
  return UserCollection.findByIdAndUpdate(userId, userObject)
}





module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  editUser
}
