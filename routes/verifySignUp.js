const db = require('../config/env.js');
const config = require('../config/config.js');
const Business = db.business;
 
checkDuplicateUserNameOrNameOrEmailOrMobile = (req, res, next) => {
  // -> Check Username is already in use
    Business.findOne({
        where: {
            username: req.body.account
        } 
    }).then(business => {
        if(business){
            res.status(400).send("Fail -> Username is already taken!");
        return;
        }

  // -> Check Name is already in use
    Business.findOne({
        where: {
            name: req.body.name
        } 
    }).then(business => {
        if(business){
            res.status(400).send("Fail -> Store name is already taken!");
        return;
        }
    
  // -> Check Email is already in use
    Business.findOne({ 
        where: {
            email: req.body.email
        } 
    }).then(business => {
        if(business){
            res.status(400).send("Fail -> Email is already in use!");
            return;
        }

  // -> Check mobile is already in use
    Business.findOne({ 
        where: {
            mobile: req.body.mobile
        } 
    }).then(business => {
        if(business){
            res.status(400).send("Fail -> Phone number is already in use!");
            return;
        }
        
    next();
    });
    });
    });
  });
}
 
const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrNameOrEmailOrMobile = checkDuplicateUserNameOrNameOrEmailOrMobile;

 
module.exports = signUpVerify;