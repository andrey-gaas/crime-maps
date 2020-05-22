const { Router } = require('express');
const emailValidator = require('email-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const passport = require('passport');
const User = require('../models/User');

const router = Router();

router.post('/sign-up', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || name.length < 6 || name.length > 16) return res.send('name: lenght');
    if (!name.match(/^\s*([0-9a-zA-Zа-яА-Я]*)\s*$/)) return res.send('name: invalid');
    if (!emailValidator.validate(email)) return res.send('email: invalid');
    if (!password || password.length < 6 || password.length > 16) return res.send('password: length');
    if (!password.match(/^\s*([0-9a-zA-Z]*)\s*$/)) return res.send('password: invalid');

    const candidate = await User.findOne({
      $or: [ { email }, { name } ],
    });

    if (candidate) {
      if (candidate.name === name) return res.send('name: busy');
      else return res.send('email: busy');
    }

    const lastUser = await User.find({}).limit(1).sort({ $natural: -1 });

    const salt = bcrypt.genSaltSync(10);
    const id = lastUser.length ? lastUser[0].id + 1 : 0;

    const user = new User({
      id,
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    await user.save();

    const token = jwt.sign(
      { email, id },
      config.get('jwt'),
      { expiresIn: 60 * 60 },
    );

    const cookieAge = { expires: new Date(Date.now() + 31536000000) };
    
    res.cookie('user-name', name, cookieAge);
    res.cookie('user-email', email, cookieAge);
    res.cookie('user-id', id, cookieAge);
    res.cookie('token', `Bearer ${token}`, cookieAge);
    res.status(201).send('OK');
  } catch (e) {
    console.log(e.message);
    res.status(500).send('server error');
  }
});

router.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!emailValidator.validate(email)) return res.send('email: invalid');
    if (!password || password.length < 6 || password.length > 16) return res.send('password: invalid');
    if (!password.match(/^\s*([0-9a-zA-Z]*)\s*$/)) return res.send('password: invalid');

    const candidate = await User.findOne({ email });

    if (candidate) {
      const passwordResult = bcrypt.compareSync(password, candidate.password);

      if (passwordResult) {
        const token = jwt.sign(
          { email: candidate.email, id: candidate.id },
          config.get('jwt'),
          { expiresIn: 60 * 60 },
        );

        const cookieAge = { expires: new Date(Date.now() + 31536000000) };

        res.cookie('user-name', candidate.name, cookieAge);
        res.cookie('user-email', candidate.email, cookieAge);
        res.cookie('user-id', candidate.id, cookieAge);
        res.cookie('token', `Bearer ${token}`, cookieAge);
        res.send('OK');
      } else {
        res.send('password: wrong');
      }

    } else {
      res.send('email: not found');
    }
  } catch(e) {
    res.status(500).send('server error');
  }
});

router.get('/check', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('OK');
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.clearCookie('user-name');
  res.clearCookie('user-email');
  res.clearCookie('user-id');
  res.send('ok');
});

module.exports = router;
