/**
 * This is the file to start our server.
 * It contains the main back-end logic for our server.
 *
 * Contributors: Yue Jiao, Yunning Yang
 */

var express = require('express') //set up middleware for API and allow dynamic rendering of pages
var cors = require('cors') // handle the cors domain requests
var bodyParser = require('body-parser') //allow us to extract the data sent from the FE
var app = express()
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static('./client'));


//app.use mounts the middleware function at a specific path
app.use(bodyParser.json())
app.use(cors())

//parse the data with json, the query string library
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//access bueisness route
var Business = require('./controllers/businessAuthController.js')

app.use('/business', Business)

//access customer route
var Customer = require('./controllers/customerAuthController.js')

app.use('/customer', Customer)

//access API to listen to a port
app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
