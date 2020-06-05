const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser')

const app = express();
const PORT = process.env.PORT || config.get('port');

app.use(express.json({ exptended: true }));
app.use(cookieParser());
app.use(passport.initialize());

/* Routes */
app.use('/api/cities', require('./routes/cities'));
app.use('/api/incidents', require('./routes/incidents'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/settings', require('./routes/settings'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch(e) {
    console.error('Server naebnulsa', e);
    process.exit();
  }
}

start();
