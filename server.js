const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');



const app = express();
const PORT = process.env.PORT || config.get('port');

app.use(express.json({ exptended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'build')));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch(e) {
    console.error('Server naebnulsa', e);
    process.exit();
  }
}

start();
