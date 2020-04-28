module.exports = app => {
    const business = require("../controllers/business.controller.js");
  
    var router = require("express").Router();
  
    // Create a new business
    router.post("/", business.create);
  
    // Retrieve all business
    router.get("/", business.findAll);
  
    // Retrieve a single business with id
    router.get("/:id", business.findOne);
  
    // Update a business with id
    router.put("/:id", business.update);
  
    // Delete a business with id
    router.delete("/:id", business.delete);
  
    // Create a new business
    router.delete("/", business.deleteAll);
  
    app.use('/api/business', router);
  };