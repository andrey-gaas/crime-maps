const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('config');
const emailValidator = require('email-validator');
const User = require('../models/User');

const router = Router();

const cookieAge = { expires: new Date(Date.now() + 31536000000) };

router.post('/account/name', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { name } = req.body;
  const id = req.cookies['user-id'];
  const nameFromCookie = req.cookies['user-name'];

  if (!name) return res.send('Введите новое имя.');
  if (name === nameFromCookie) return res.send('Придумайте новое имя.');
  if (name.length < 6 || name.length > 16) return res.send('Имя должно содержать от 6 до 16 символов.');
  if (!name.match(/^\s*([0-9a-zA-Zа-яА-Я]*)\s*$/)) return res.send('Допустимы только латинские и кириллические символы, а так же числа.');

  try {
    const user = await User.findOne({ name });
    if (user) return res.send('Имя занято. Попробуйте другое.');
  } catch (e) {
    return res.status(500).send('server error');
  }

  try {
    await User.findOneAndUpdate({ id }, { name });
    res.cookie('user-name', name, cookieAge);
    res.send('OK');
  } catch(e) {
    res.status(500).send('server error');
  }
});

router.post('/account/email', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { email } = req.body;
  const id = req.cookies['user-id'];
  const emailFromCookie = req.cookies['user-email'];

  if (!email) return res.send('Введите новый E-Mail.');
  if (email === emailFromCookie) return res.send('Придумайте новый E-Mail.');
  if (!emailValidator.validate(email)) return res.send('Введите корректный E-Mail');

  try {
    const user = await User.findOne({ email });
    if (user) return res.send('E-Mail занят. Попробуйте другой.');
  } catch (e) {
    res.status(500).send('server error');
  }

  try {
    await User.findOneAndUpdate({ id }, { email });

    const token = jwt.sign(
      { email, id },
      config.get('jwt'),
      { expiresIn: 60 * 60 },
    );

    res.cookie('token', `Bearer ${token}`, cookieAge);
    res.cookie('user-email', email, cookieAge);
    res.send('OK');
  } catch(e) {
    res.status(500).send('server error');
  }
});

module.exports = router;
