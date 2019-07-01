
const mongoose = require('./connection.js')



const CommentSchema = new mongoose.Schema({
 trailId: {
   type: String,
   required: true,
 },
  user: {
    type: Number,
    required: true,
  },
  date: {
    type: new Date,
    required: true,
  },
})


const CommentCollection = mongoose.model('Comment', CommentSchema)



function getComments() {
  return CommentCollection.find()
}

function addComment(commentObject) {
  return CommentCollection.create(commentObject)
}

function getComment(commentId) {
  return CommentCollection.findById(commemntId)
}

function deleteComment(commentId) {
  return CommentCollection.findByIdAndDelete(commentId)
}

function editComment(commentId, commemntObject) {
  return CommentCollection.findByIdAndUpdate(commentId, commemntObject)
}





module.exports = {
  getComments,
  getComment,
  addComment,
  deleteComment,
  editComment
}
