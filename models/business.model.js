module.exports = (sequelize, Sequelize) => {
    const Business = sequelize.define("businesses", {
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
    });
  
    return Business;
  };