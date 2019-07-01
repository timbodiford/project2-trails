
const express = require('express')


const trailApi = require('../models/trail.js')


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



trailRouter.get('/:trailId', (req, res) => {
  trailApi.getTrail(req.params.trailId)
  .then((trail) => {
    res.render('trails/trail', {trail} )
  })
})

trailRouter.delete('/:trailId', (req, res) => {
  trailApi.deleteTrail(req.params.trailId)
  .then((trail) => {
    res.redirect('/trails')
  })
})

trailRouter.put('/:trailId', (req, res) => {
  trailApi.editTrail(req.params.trailId, req.body)
  .then(() => {
    res.redirect('/trails')
  })
})





module.exports = {
  trailRouter
}
