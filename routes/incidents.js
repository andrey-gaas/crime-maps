const { Router } = require('express');
const Incident = require('../models/Incident');

const router = Router();

function isUndefined(value) {
  return value === undefined;
}

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

router.post('/', async (req, res) => {

  try {
    const { type, title, text, coords, sources, media } = req.body;

    if (
      isUndefined(type) ||
      isUndefined(title) ||
      isUndefined(text) ||
      isUndefined(coords) ||
      isUndefined(sources) ||
      isUndefined(media)
    ) {
      throw new SyntaxError('object is invalid');
    }

    const incidents = await Incident.find({});

    const incident = new Incident({
      id: incidents[incidents.length].id + 1,
      views: 0,
      type,
      title,
      text,
      coords,
      sources,
      media,
    });

    await incident.save();
    res.send('OK');

  } catch(e) {
    res.status(500).send(e.message);
  }
});

router.put('/', async (req, res) => {
  try {
    const { id } = req.body;

    if (isUndefined(id)) {
      throw new SyntaxError('need id');
    }
    
    const oldVariant = await Incident.findOneAndUpdate({ id }, req.body);

    res.send(oldVariant);

  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
