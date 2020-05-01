const { Router } = require('express');
const Incident = require('../models/Incident');

const router = Router();

function isUndefined(value) {
  return value === undefined;
}

router.get('/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const incidents = await Incident.find({ city });
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
    const {
      type,
      title,
      text,
      coords,
      sources,
      media,
      city,
      date,
    } = req.body;

    if (
      isUndefined(type)    ||
      isUndefined(title)   ||
      isUndefined(text)    ||
      isUndefined(coords)  ||
      isUndefined(sources) ||
      isUndefined(media)   ||
      isUndefined(city)    ||
      isUndefined(date)
    ) {
      throw new SyntaxError('object is invalid');
    }

    const lastIncident = await Incident.find({}).limit(1).sort({ $natural: -1 });

    const incident = new Incident({
      id: lastIncident[0] ? lastIncident[0].id + 1 : 1,
      views: 0,
      type,
      title,
      text,
      coords,
      sources,
      media,
      city,
      date,
    });

    await incident.save();
    res.send('OK');

  } catch(e) {
    res.status(500).send(e.message);
  }
});

router.put('/', async (req, res) => {
  try {
    const oldVariant = await Incident.findOneAndUpdate({ id: req.body.id }, req.body);

    res.send(oldVariant);

  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedIncident = await Incident.findOneAndDelete({ id });
    
    if (deletedIncident === null) {
      throw new Error('incident not found');
    }

    res.send('OK');

  } catch (e) {
    res.status(500).send(e.message);
  }



});

module.exports = router;
