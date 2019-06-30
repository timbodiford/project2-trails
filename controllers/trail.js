
const express = require('express')


const trailApi = require('../models/trail.js')


const trailRouter = express.Router()


trailRouter.get('/', (req, res) => {
  trailApi.getTrails()
  .then((trails) => {
    res.render('trails/trails')
  })
})


module.exports = {
  trailRouter
}
