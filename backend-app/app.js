const express = require('express');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./routes/posts');
const userRoutes = require('./routes/user');
const app = express();

mongoose.connect(config.DB.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log('Error connecting DB: ' + err.message);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join('images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Acept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS')
  next();
});

app.use('/api/posts', router);
app.use('/api/user', userRoutes);

module.exports = app;
