const express = require('express');
require('dotenv').config();
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
new (require('./config/env'));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
require("./routes/api")(app);
app.get('/err', function (req, res) {
  throw new Error('Error!');
})
app.use(function (req, res, next) {
  res.status(404).json({
    error_message: 'Endpoint not found'
  });
})
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error_message: 'Something broke!'
  });
})
console.log(`Running ${process.env.NODE_ENV}`);
app.listen(process.env.PORT || 3006, function () {
  console.log(`Sakila api is running at http://localhost:${process.env.PORT || 3006}`);
});