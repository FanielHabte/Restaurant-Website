const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the current directory
app.use(express.static(__dirname));

// Define your routes
app.get('/', (req, res) => {
  res.render("pages/");
});

app.get('/menu', (req, res) => {
  res.render("pages/menu");
});

app.get('/news', (req, res) => {
  res.render("pages/news");
});

app.get('/locations', (req, res) => {
  res.render("pages/locations");
});

app.get('/reservations', (req, res) => {
  res.render("pages/reservations");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});