const { Router } = require('express');
const Incident = require('../models/Incident');

const router = Router();

router.get('/', (req, res) => {
  res.send('Incedents');
});

module.exports = router;
