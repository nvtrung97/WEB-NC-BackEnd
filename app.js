require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
new (require('./config/env'));
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
console.log(process.env.NODE_ENV);
app.use(cors(corsOption));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/err', function (req, res) {
  throw new Error('Error!');
})
require("./middlewares/route.mdw")(app);
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
  console.log(`Api is running at http://localhost:${process.env.PORT || 3006}`);
});