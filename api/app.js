const sequelize = require('./Database/Database');
const History = require('./Database/Model/History');
const PeopleCounter = require('./Database/Model/PeopleCounter');
const Location = require('./Database/Model/Location');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());  //Connect/Express middleware

//----------Set up the datbases using sequelize

function setup() {
  History.sync() // Using 'force: true' for demo purposes. It drops the table users if it already exists and then creates a new one.
  PeopleCounter.sync() // Using 'force: true' for demo purposes. It drops the table users if it already exists and then creates a new one.
  .then(function() {
    PeopleCounter.create({ roomNo: 1, count: 0});
  });
  Location.sync()
}

//Creates the room.db database if it doesnt exist and if exists checks that the database tables match the models.
sequelize.sync({ alter: true }).then(() => {
  setup();
  console.log('Database is ready to use')
});


//-------------Routes the clientside can access 

app.get("/history", function(request, response) {
  History.findAll().then(function(history) {
    // finds all entries in the users table
    response.send(history); // sends users back to client
  });
});

app.get("/counter", function(request, response) {
  PeopleCounter.findAll().then(function(counter) {
    // finds all entries in the users table
    response.send(counter); // sends users back to the client
  });
});

// ------------- Error handler
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