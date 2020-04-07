const express = require('express');
const config = require('config');
const path = require('path');

const app = express();
const PORT = process.env.PORT || config.get('port');

console.log(process.env.NODE_ENV);


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'build')));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

async function start() {
  try {
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch(e) {
    console.error('Server naebnulsa', e);
  }
}

start();
