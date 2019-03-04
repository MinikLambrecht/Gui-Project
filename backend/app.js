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

  if (isDev) {
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
    app.use(express.static(path.resolve(__dirname, '../dist')));
  } else {
    app.use(express.static(path.resolve(__dirname, '../dist')));
    app.get('*', function (req, res) {
      res.sendFile(path.resolve(__dirname, '../dist/index.html'));
      res.end();
    });
  }

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`>>> 🌎 Open http://localhost:${PORT}/ in your browser.`);
  });
});
