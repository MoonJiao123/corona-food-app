const Sequelize = require('sequelize')
const db = {}
//HOST: "us-cdbr-iron-east-01.cleardb.net",
//     USER: "bd778a3ba469c4",
//     PASSWORD: "1641b41b",
//     DB: "heroku_90f3403bf02fffe",
const sequelize = new Sequelize('heroku_90f3403bf02fffe', 'bd778a3ba469c4', '1641b41b', {
    host: 'us-cdbr-iron-east-01.cleardb.net',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db