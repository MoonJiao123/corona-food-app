const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path'); 

var corsOptions = {
  origin: "http://localhost:8081"
};

// Serve static files from the React app
app.use(express.static('./client'));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const db = require("./models");
db.sequelize.sync();

require("./routes/business.routes")(app);

const port = process.env.PORT || 5000;
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
// Hello there :D 