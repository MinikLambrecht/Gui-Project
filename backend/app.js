const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');

const users = require('./routes/user');
const webpackConfig = require('./webpack.config');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }

  console.log(`>>> 🌎 Open http://localhost:${PORT}/ in your browser.`);
});
