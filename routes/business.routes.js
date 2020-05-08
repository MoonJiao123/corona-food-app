const authJwt = require('./verifyToken');
const verifySignUp = require('./verifySignUp');

module.exports = function(app) {
 
  const controller = require('../controllers/business.controller.js');

app.post('/api/auth/reg', [verifySignUp.checkDuplicateUserNameOrNameOrEmailOrMobile], controller.signup);

app.post('/api/auth/login', controller.signin);

// app.get('/business/user', [authJwt.verifyToken], controller.userContent);

// app.get('/business', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);

}