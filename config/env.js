const env = {
    HOST: "us-cdbr-iron-east-01.cleardb.net",
    USER: "bd778a3ba469c4",
    PASSWORD: "1641b41b",
    DB: "heroku_90f3403bf02fffe",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
module.exports = env;