module.exports = (sequelize, Sequelize) => {
    const Business = sequelize.define("business", {
      account: {
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
    });
  
    return Business;
  };