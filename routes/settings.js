const { Router } = require('express');
const passport = require('passport');
const User = require('../models/User');

const router = Router();

const cookieAge = { expires: new Date(Date.now() + 31536000000) };

/* /api/cities/ */
router.post('/account/name', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { name } = req.body;
  const id = req.cookies['user-id'];
  const cookieName = req.cookies['user-name'];

  if (!name) return res.send('Введите новое имя.');
  if (name === cookieName) return res.send('Придумайте новое имя.');
  if (name.length < 6 || name.length > 16) return res.send('Имя должно содержать от 6 до 16 символов.');
  if (!name.match(/^\s*([0-9a-zA-Zа-яА-Я]*)\s*$/)) return res.send('Допустимы только латинские и кириллические символы, а так же числа.');

  try {
    await User.findOneAndUpdate({ id }, { name });
    res.cookie('user-name', name, cookieAge);
    res.send('OK');
  } catch(e) {
    res.status(500).send('server error');
  }
});

module.exports = router;
