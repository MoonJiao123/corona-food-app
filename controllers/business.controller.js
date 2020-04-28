const db = require("../models");
const Business = db.business;
const Op = db.Sequelize.Op;

// Create and Save a new business_account
exports.create = (req, res) => {
   // Validate request
   if (!req.body.account) {
    res.status(400).send({
      message: "No accounts!"
    });
    return;
  }

  // Create a Business
  const business = {
    account: req.body.account,
    password: req.body.password,
    email: req.body.email,
    mobile: req.body.mobile
  };

  // Save Business in the database
  Business.create(business)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Business_account."
      });
    });
}

// Retrieve all businesss_account from the database.
exports.findAll = (req, res) => {
    const account = req.query.account;
    var condition = account ? { account: { [Op.like]: `%${account}%` } } : null;
  
    Business.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving business accounts."
        });
      });
};

// Find a single business_account with an id
exports.findOne = (req, res) => {
    const id = req.params.business_id;

    Business.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving business account with id=" + id
        });
      });
};

// Update a business_account by the id in the request
exports.update = (req, res) => {
    const id = req.params.business_id;

    Business.update(req.body, {
      where: { business_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Account was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Account with id=${id}. Maybe Business was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Busienss with id=" + id
        });
      });
};

// Delete a business_account with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.business_id;

    Business.destroy({
      where: { business_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "business account was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete business account with id=${id}. Maybe business account was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete business account with id=" + id
        });
      });
};

// Delete all businesss_account from the database.
exports.deleteAll = (req, res) => {
    Business.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} business_accounts were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all business accounts."
          });
        });
};

