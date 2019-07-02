
const express = require('express')


const userApi = require('../models/user.js')


const userRouter = express.Router()


userRouter.get('/', (req, res) => {
  userApi.getUsers()
  .then((users) => {
    res.render('users/users', { users })
  })
})

userRouter.post('/', (req, res) => {
  userApi.addUser(req.body)
  .then(() => {
    res.redirect('/users')
  })
})

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
  commenmtApi.editUser(req.params.userId, req.body)
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
    res.render('users/user', {user} )
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
