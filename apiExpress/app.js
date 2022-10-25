const sequelize = require('./Database/Database');
const History = require('./Database/Model/History');
const PeopleCounter = require('./Database/Model/PeopleCounter');
const cors = require('cors');
const express = require('express');
const app = express();

sequelize.sync({ force: true }).then(() => {
  setup();
  console.log('db is ready')
});

app.use(cors());

app.get("/history", function(request, response) {
  History.findAll().then(function(history) {
    // finds all entries in the users table
    response.send(history); // sends users back to the page
  });
});

app.get("/testing", function(request, response) {
  History.findAll().then(function(history) {
    // finds all entries in the users table
    History.create({ role: "dulce", entry: "some time", exit: "some time"});
    response.send(history); // sends users back to the page
  });
});

app.get("/counter"), function(request, response){
  PeopleCounter.findAll().then(function(counter) {
    // finds all entries in the users table
    response.send(counter); // sends users back to the page
  });
}

// Initial set of users to populate the database with
var defaultUsers = ["Nurse", "Doctor", "Visitor"];
var users = defaultUsers.slice();

function setup() {
  History.sync({ force: true }) // Using 'force: true' for demo purposes. It drops the table users if it already exists and then creates a new one.
    .then(function() {
      // Add default users to the database
      for (var i = 0; i < users.length; i++) {
        // loop through all users
        History.create({ role: users[i], entry: "some time", exit: "some time"}); // create a new entry in the users table
      }
    });
  PeopleCounter.sync({ force: true }) // Using 'force: true' for demo purposes. It drops the table users if it already exists and then creates a new one.
  .then(function() {
    // Add default users to the database
    for (var i = 0; i < users.length; i++) {
      // loop through all users
      PeopleCounter.create({ room: 1, counter: 10}); // create a new entry in the users table
    }
  });
}

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4000, () => {
  console.log("app is running");
});

module.exports = app;