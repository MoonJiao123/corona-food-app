const authJwt = require('./verifyJwtToken');
const verifySignUp = require('./verifySignUp');

module.exports = function(app) {
 
  const controller = require('../controller/business.controller.js');

app.post('/business/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

app.post('/business/signin', controller.signin);

app.get('/business/user', [authJwt.verifyToken], controller.userContent);

app.get('/business', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);

}