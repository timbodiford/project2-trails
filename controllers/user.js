
const express = require('express')


const userApi = require('../models/user.js')
const trailApi = require('../models/trail.js')


const userRouter = express.Router()


userRouter.get('/', (req, res) => {
  userApi.getUsers()
    .then((users) => {
      res.render('users/users', { users })
    })
})

//this one works when only dealing with users unlinked
userRouter.post('/', (req, res) => {
  userApi.addUser(req.body)
  .then(() => {
    res.redirect('/users')
  })
})

//the one below is where I'm trying to do a similar thing whith users as I am doing with comments
// userRouter.post('/', (req, res) => {
//   trailId = req.params.trailId
//   userApi.addUser(trailId, req.body)
//     .then(() => {
//       res.redirect(`/trails/${trailId}`)
//     })
// })

userRouter.get('/new', (req, res) => {
  res.render('users/newUserForm')
})


userRouter.get('/:userId/edit', (req, res) => {
  userApi.getUser(req.params.userId)
    .then((user) => {
      res.render('users/editUserForm', { user })
    })
})
userRouter.put('/:userId', (req, res) => {
  userApi.editUser(req.params.userId, req.body)
    .then(() => {
      res.redirect('/users')
    })
    .catch((err) => {
      res.send(err)
    })
})



userRouter.get('/:userId', (req, res) => {
  userApi.getUser(req.params.userId)
    .then((user) => {
      res.render('users/user', { user })
    })
})


userRouter.delete('/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then((user) => {
      res.redirect('/users')
    })
})







module.exports = {
  userRouter
}
