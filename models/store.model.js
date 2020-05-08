module.exports = (sequelize, Sequelize) => {
    const Store = sequelize.define("stores", {
      store_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      address: {
        type: Sequelize.STRING
      },
      business_id: {
        type: Sequelize.INTEGER
      }
      
    });
  
    return Store;
  };