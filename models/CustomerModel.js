/**
 * This file is to set up model for consumer user.
 *
 * Contributors: Yue Jiao, Yunning Yang
 */

const Sequelize = require('sequelize')
const db = require('../config/DB.js'); //the connection to database

//define consumer user model here, and reflect the fields in our database to BE
//the value set here should be the same as the value property of the field we created in database
module.exports = db.sequelize.define(
    "customers",
    {
      customer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      account: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      customer_location: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false //Sequelize default to timestamps, set to true if we decide to use it
    }
)
