/**
 * Contributors: Yue Jiao, Yunning Yang
 */

const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/business.model.js')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  console.log(req.body.name);
  console.log(req.body);
  console.log(req.body.email);
  const userData = {
    account: req.body.account,
    password: bcrypt.hashSync(req.body.password, 8),
    email: req.body.email,
    mobile: req.body.mobile,
    name: req.body.name
    
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/business', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users
// const authJwt = require('./verifyToken');
// const verifySignUp = require('./verifySignUp');

// module.exports = function(app) {
 
//   const controller = require('../controllers/business.controller.js');

// app.post('/api/auth/reg', [verifySignUp.checkDuplicateUserNameOrNameOrEmailOrMobile], controller.signup);

// app.post('/api/auth/login', controller.signin);

// // app.get('/business/user', [authJwt.verifyToken], controller.userContent);

// // app.get('/business', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);

// }