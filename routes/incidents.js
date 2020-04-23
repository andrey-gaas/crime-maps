const { Router } = require('express');
const Incident = require('../models/Incident');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const incidents = await Incident.find({});
    res.send(incidents);
  } catch(e) {
    res.status(500).send({ error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const incident = await Incident.find({ id: req.params.id });
    
    if (!incident.length) {
      throw new Error('not found');
    }

    res.send(incident);
  } catch(e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = router;
