module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("carts", {
      cart_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      custmer_id: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.DOUBLE
      }
    });
  
    return Cart;
  };