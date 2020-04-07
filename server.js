const express = require('express');
const config = require('config');

const app = express();
const PORT = process.env.PORT || config.get('port');

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
