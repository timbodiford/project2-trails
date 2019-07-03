
const express = require('express')


const commentApi = require('../models/comment.js')
const trailApi = require('../models/trail.js')



const commentRouter = express.Router({ mergeParams: true })


// commentRouter.get('/', (req, res) => {
//   commentApi.getComments()
//   .then((comments) => {
//     res.render('comments/comments', { comments })
//   })
// })

// commentRouter.post('/', (req, res) => {
//   commentApi.addComment(req.body)
//   .then(() => {
//     res.redirect('/comments')
//   })
// })

commentRouter.post('/', (req, res) => {
  // req.body.trailId = req.params.trailId
  const trailId = req.params.trailId
  commentApi.addComment(trailId, req.body)
    .then(() => {
            res.redirect(`/trails/${trailId}`)
    })
    .catch((err) => {
          res.send(err)
    })
})

// commentRouter.post('/', (req, res) => {
//   req.body.trailId = req.params.trailId
//   commentApi.addComment(req.body)
//     .then(() => {
//       res.render((`/trails/${trailId}`)
//     )})
// })



  commentRouter.get('/new', (req, res) => {
    res.render('comments/newCommentForm', { trailId: req.params.trailId })
  })

  commentRouter.delete('/:commentId', (req, res) => {
    commentApi.deleteComment(req.params.commentId)
      .then((comment) => {
        const trailId = req.params.trailId
        res.redirect(`/trails/${trailId}`)
      })
  })

  // trailRouter.delete('/:trailId', (req, res) => {
  //   trailApi.deleteTrail(req.params.trailId)
  //     .then((trail) => {
  //       res.redirect('/trails')
  //     })
  // })






  commentRouter.get('/:commentId/edit', (req, res) => {
    commentApi.getComment(req.params.commentId)
    .then((comment) => {
      res.render('comments/editComment', { 
        trailId: req.params.trailId,
        comment: comment })
    })
  })
  commentRouter.put('/:commentId', (req, res) => {
    commentApi.editComment(req.params.commentId, req.body)
    .then(() => {
      res.redirect(`/trails/${req.params.trailId}`)
    })
    .catch((err) => {
      res.send(err)
  })
  })



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
