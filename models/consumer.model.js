module.exports = (sequelize, Sequelize) => {
    const Consumer = sequelize.define("consumers", {
      customer_id: {
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
      location: {
        type: Sequelize.STRING
      }
    });
  
    return Business;
  };