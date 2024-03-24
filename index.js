var express = require('express');
require('dotenv').config();
var app = express();
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
// Rutas 
const timestampRoutes = require("./src/routes/timestampRoutes");
// Ruta publica
app.use(express.static('public'));

// Vista principal
app.set('view engine', 'pug');
app.set('views', './src/views');


app.get("/", function (req, res) {
  res.render('index');
});

// Rutas
app.use('/api', timestampRoutes);

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
