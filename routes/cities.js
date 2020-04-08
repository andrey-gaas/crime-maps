const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send(['Новосибирск', 'Москва', 'Ставрополь'])
});

module.exports = router;
