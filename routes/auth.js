const { Router } = require('express');

const router = Router();

router.post('/sign-up', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

module.exports = router;
