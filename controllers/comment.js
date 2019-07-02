
const express = require('express')


const commentApi = require('../models/comment.js')


const commentRouter = express.Router({mergeParams: true})


commentRouter.get('/', (req, res) => {
  commentApi.getComments()
  .then((comments) => {
    res.render('comments/comments', { comments })
  })
})

// commentRouter.post('/', (req, res) => {
//   commentApi.addComment(req.body)
//   .then(() => {
//     res.redirect('/comments')
//   })
// })

commentRouter.post('/', (req, res) => {
  // req.body.trailId = req.params.trailId
  commentApi.addComment(req.params.trailId, req.body)
  // console.log(req.params.trailId)
    .then((comment) => {
      res.render(`/trails/${req.params.trailId}`)
      // res.render(`/trails/${req.params.trailId}`)

    })
    .catch((err) => {
      res.send(err)
    })
})

commentRouter.get('/new', (req, res) => {
  res.render('comments/newCommentForm', {trailId: req.params.trailId})
})

commentRouter.delete('/:commentId', (req, res) => {
  commentApi.deleteComment(req.params.commentId)
    .then((comment) => {
      res.render('trails/trail')
    })
})

// trailRouter.delete('/:trailId', (req, res) => {
//   trailApi.deleteTrail(req.params.trailId)
//     .then((trail) => {
//       res.redirect('/trails')
//     })
// })






// commentRouter.get('/:commentId/edit', (req, res) => {
//   commentApi.getComment(req.params.commentId)
//   .then((comment) => {
//     res.render('comments/editCommentForm', { comment })
//   })
// })
// commentRouter.put('/:commentId', (req, res) => {
//   commenmtApi.editComment(req.params.commentId, req.body)
//   .then(() => {
//     res.redirect('/comments')
//   })
//   .catch((err) => {
//     res.send(err)
// })
// })



// commentRouter.get('/:commentId', (req, res) => {
//   commentApi.getComment(req.params.commentId)
//   .then((comment) => {
//     res.render('comments/comment', {comment} )
//   })
// })


// commentRouter.delete('/:commentId', (req, res) => {
//   commentApi.deleteComment(req.params.commentId)
//   .then((comment) => {
//     res.redirect('/comments')
//   })
// })







module.exports = {
  commentRouter
}
