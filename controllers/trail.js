
const express = require('express')


const trailApi = require('../models/trail.js')
const commentApi = require('../models/comment.js')


const trailRouter = express.Router()


trailRouter.get('/', (req, res) => {
  trailApi.getTrails()
  .then((trails) => {
    res.render('trails/trails', { trails })
  })
})

trailRouter.post('/', (req, res) => {
  trailApi.addTrail(req.body)
  .then(() => {
    res.redirect('/trails')
  })
})

trailRouter.get('/new', (req, res) => {
  res.render('trails/newTrailForm')
})


trailRouter.get('/:trailId/edit', (req, res) => {
  trailApi.getTrail(req.params.trailId)
  .then((trail) => {
    res.render('trails/editTrailForm', { trail })
  })
})







trailRouter.put('/:trailId', (req, res) => {
  trailApi.editTrail(req.params.trailId, req.body)
  .then(() => {
    res.redirect('/trails')
  })
  .catch((err) => {
    res.send(err)
})
})



trailRouter.get('/:trailId', (req, res) => {
  trailApi.getTrail(req.params.trailId)
  .then((trail) => {
    commentApi.getCommentsByTrailId(trail._id)
    .then((comment) => {
      res.render('trails/trail', {trail, comment} )

    })
  })
})


trailRouter.post('/:trailId/comment', (req, res) => {
  req.body.trailId = req.params.trailId
  commentApi.addComment(req.body)
    .then(() => {
      res.render('trails/trail')
    })
})





trailRouter.delete('/:trailId', (req, res) => {
  trailApi.deleteTrail(req.params.trailId)
  .then((trail) => {
    res.redirect('/trails')
  })
})







module.exports = {
  trailRouter
}
