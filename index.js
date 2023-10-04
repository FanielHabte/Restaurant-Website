const express = require('express');

const assert = require('assert')
const router = express.Router();
// const pool = require('./database'); // Import the database connection
const path = require('path'); // Require the 'path' module
const { route } = require('express/lib/application');
const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.static(__dirname));

app.get('/index', (req, res) => {
  res.render("pages/index");
});

app.get('/menu', (req, res) => {
  res.render("pages/menu");
});

app.get('/news', (req, res) => {
  res.render("pages/news" );
});

app.get('/locations', (req, res) => {
  res.render("pages/locations");
});

app.get('/reservations', (req, res) => {
  res.render("pages/reservations");
});

app.listen(2000, () => {
//   console.log("Server is running on port 2000");
});






//  // Replace with your MongoDB URI and database name

// // Create a MongoDB client and connect to the database
// const client = new MongoClient(uri);

// // Connect to the MongoDB server
// client.connect()
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Now you can perform database operations.
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });

