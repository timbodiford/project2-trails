
const mongoose = require('./connection.js')



const CommentSchema = new mongoose.Schema({
  trailId: 
  mongoose.Types.ObjectId,
  // {
  //   type: String,
  //   required: true
  // },
  // user: {
  //   type: Number,
  //   required: true,
  // },
  comment: {
    type: String,
    required: true,
  },
})


const CommentCollection = mongoose.model('Comment', CommentSchema)



function getComments() {
  return CommentCollection.find()
}

function addComment(trailId, commentObject) {
  return CommentCollection.create(trailId, commentObject)
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

function getCommentsByTrailId (trailId) {
  return CommentCollection.find({trailId: trailId})
}




module.exports = {
  getComments,
  getComment,
  addComment,
  deleteComment,
  editComment,
  getCommentsByTrailId
}
