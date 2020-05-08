module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_img: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      expire_date: {
        type: Sequelize.DATE
      },
      stock_amount: {
        type: Sequelize.INTEGER
      },
      coupon: {
        type: Sequelize.STRING
      },
      store_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Product;
  };