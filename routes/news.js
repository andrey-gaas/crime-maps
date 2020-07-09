const { Router } = require('express');
const News = require('../models/News');

const router = Router();

function isUndefined(value) {
  return value === undefined;
}

router.get('/city/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const news = await News.find({ city });
    res.send(news);
  } catch(e) {
    res.status(500).send({ error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const news = await News.find({ id: req.params.id });
    
    if (!news.length) {
      return res.status(404).send('Новость не найдена.');
    }

    res.send(news[0]);
  } catch(e) {
    res.status(500).send({ error: 'Неизвестная ошибка. Перезагрузите страницу.' });
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
      return res.status(400).send('Введены некорректные данные.');
    }

    const lastNews = await News.find({}).limit(1).sort({ $natural: -1 });

    const news = new News({
      id: lastNews[0] ? lastNews[0].id + 1 : 1,
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

    await news.save();
    res.send('OK');

  } catch(e) {
    res.status(500).send('Неизвестная ошибка. Перезагрузите страницу.');
  }
});

router.put('/', async (req, res) => {
  try {
    await News.findOneAndUpdate({ id: req.body.id }, req.body);
    res.send('OK');
  } catch (e) {
    res.status(500).send('Неизвестная ошибка. Перезагрузите страницу.');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNews = await News.findOneAndDelete({ id });
    
    if (deletedNews === null) {
      return res.status(404).send('Новость не найдена.');
    }
    res.send('OK');
  } catch (e) {
    res.status(500).send('Неизвестная ошибка. Перезагрузите страницу.');
  }
});

module.exports = router;
