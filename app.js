const express = require('express');
const morgan = require('morgan');
require('express-async-errors');
const cors = require('cors');

const auth = require('./middlewares/auth.mdw');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
require("./routes/api")(app);
app.get('/', function (req, res) {
  res.json({
    message: 'Hello from Sakila API'
  });
})
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

app.listen(process.env.PORT || 3003, function () {
  console.log(`Sakila api is running at http://localhost:${PORT}`);
})