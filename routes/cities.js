const { Router } = require('express');
const City = require('../models/City');

const router = Router();

/* /api/cities/ */
router.get('/', async (req, res) => {
  try {
    const cities = await City.find({});
    res.send(cities);
  } catch(e) {
    console.log(e.message);
    process.exit();
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, name, lat, lng } = req.body;
    const cities = await City.find();

    const candidate = cities.find(city => city.name === name);

    if (candidate) {
      return res.status(400).json({ message: 'Город уже существует' });
    }

    const id = cities.length + 1;

    const city = new City({
      id,
      title,
      name,
      lat,
      lng
    });

    await city.save();
    res.send({ id, title, name, lat, lng });

  } catch(e) {
    console.log(e.message);
    process.exit();
    
  }
});

module.exports = router;
