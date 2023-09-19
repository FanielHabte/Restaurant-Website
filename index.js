const express = require('express');
const path = require('path'); // Require the 'path' module
const app = express();

// Set the views directory
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