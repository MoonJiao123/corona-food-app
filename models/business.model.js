/**
 * Contributors: Yue Jiao, Yunning Yang
 */

const Sequelize = require('sequelize')
const db = require('../config/db.js');
module.exports = db.sequelize.define(
  "businesses",
  {
    business_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    account: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)

