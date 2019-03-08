const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./db');
const webpackConfig = require('./webpack.config');

const dotenv = require('dotenv');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const users = require('./routes/user');


// Configuration
// =================================================================================================

// Setup mongoose
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API Routes
app.use('/api/users', users);

if (isDev){
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../frontend/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express .static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  dotenv.config();
  console.log(`${process.env.REACT_APP_GOOGLE_API_KEY}`);
 console.log(`>>> 🌎 Open http://localhost:${PORT}/ in your browser.`);
});
