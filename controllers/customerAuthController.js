/**
 * This file is to get the requested data of login/signup from the CustomerModel.js
 * Comparing the requested data with the data we have in database.
 * Return the result of comparison to FE.
 *
 * Contributors: Yue Jiao, Yunning Yang
 */

const express = require('express')
const customerUsers = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const CUser = require('../models/CustomerModel.js')
customerUsers.use(cors())

process.env.SECRET_KEY = 'secret'

//SIGNUP
customerUsers.post('/register', (req, res) => {

    console.log(req.body.name); //for testing, can be deleted
    console.log(req.body); //for testing, can be deleted
    console.log(req.body.email); //for testing, can be deleted

    const userData = {
        account: req.body.account,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        customer_location: req.body.customer_location
    }

    //since we only use email and password for login, so we only compare email here
    CUser.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                //if the user does not exist, there is no user with the same email, we will create the user here
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    //it generate its own token after it created the user
                    CUser.create(userData)
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

//LOGIN
customerUsers.post('/login', (req, res) => {
    CUser.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) {
                //if the email exists, compare the password from database
                //first password comes from FE, second password comes from database
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    //jwt will generate a token that will be passing to FE
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440 //lifetime of token
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

//PROFILE
//to fetch profile from FE.
customerUsers.get('/customer', (req, res) => {
    //to verify authorization sent from FE with secret key
    //it converts token back to the object we created
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    CUser.findOne({
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

module.exports = customerUsers
