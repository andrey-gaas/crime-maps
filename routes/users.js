const { Router } = require('express');
const User = require('../models/User');

const router = Router();

/* /api/users/:name */
router.get('/:name', async (req, res) => {
  try {
    const name = req.params.name;
    
    const list = await User.find({ name: { '$regex': name } });
    res.json(list);
  } catch(e) {
    console.log(e.message);
    res.status(500).send('Error');
  }
});

module.exports = router;
