const { Router } = require('express');
const emailValidator = require('email-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const { ROLE_USER } = require('../constants/users');
const auth = require('../middleware/auth');

const router = Router();

router.post('/sign-up', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let error = '';

    if (!name || name.length < 4 || name.length > 16) error = 'Имя должно содержать от 4 до 16 символов.';
    else if (!name.match(/^\s*([0-9a-zA-Zа-яА-Я]*)\s*$/)) error = 'Допустимы только латинские и кириллические символы, а так же числа.';
    else if (!emailValidator.validate(email)) error = 'Введите корректный E-Mail.';
    else if (!password || password.length < 6 || password.length > 16) error = 'Пароль должен содержать от 6 до 16 символов.';
    else if (!password.match(/^\s*([0-9a-zA-Z]*)\s*$/)) error = 'Допустимы только латинские символы и числа.';

    if (error) {
      return res.status(400).send(error);
    }

    const candidate = await User.findOne({
      $or: [ { email }, { name } ],
    });

    if (candidate) {
      if (candidate.name === name) return res.status(400).send('Имя занято.');
      else return res.status(400).send('E-Mail занят.');
    }

    const lastUser = await User.find({}).limit(1).sort({ $natural: -1 });

    const salt = bcrypt.genSaltSync(10);
    const id = lastUser.length ? lastUser[0].id + 1 : 0;

    const user = new User({
      id,
      name,
      email,
      password: bcrypt.hashSync(password, salt),
      role: ROLE_USER,
      isBanned: false,
    });

    await user.save();

    const token = jwt.sign(
      { email, id },
      config.get('jwt'),
    );

    const cookieConfig = { expires: new Date(Date.now() + 31536000000) };
    
    res.cookie('token', `Bearer ${token}`, cookieConfig);
    res.status(201).send({
      id,
      name,
      email,
      role: ROLE_USER,
      isBanned: false,
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Ошибка сервера. Перезагрузите страницу и попробуйте еще раз.');
  }
});

router.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body;
    let error = '';

    if (!emailValidator.validate(email)) error = 'Введите корректный E-Mail';
    else if (!password || password.length < 6 || password.length > 16) error = 'Введите корректный пароль.';
    else if (!password.match(/^\s*([0-9a-zA-Z]*)\s*$/)) error = 'Введите корректный пароль.';

    if (error) return res.status(400).send(error);

    const candidate = await User.findOne({ email });

    if (candidate) {
      const passwordResult = bcrypt.compareSync(password, candidate.password);

      if (passwordResult) {
        const token = jwt.sign(
          { email: candidate.email, id: candidate.id },
          config.get('jwt'),
        );

        res.cookie('token', `Bearer ${token}`, { expires: new Date(Date.now() + 31536000000) });

        const response = {
          id: candidate.id,
          name: candidate.name,
          email: candidate.email,
          role: candidate.role,
          isBanned: candidate.isBanned,
        };
        res.send(response);
      } else {
        res.status(400).send('Введены неверные данные.');
      }

    } else {
      res.status(404).send('Пользователь не найден.');
    }
  } catch(e) {
    res.status(500).send('Ошибка сервера. Попробуйте еще раз.');
  }
});

router.get('/user', auth, async (req, res) => {
  const token = req.cookies.token.split(' ')[1];
  let id;
  try {
    id = jwt.verify(token, config.get('jwt')).id;
  } catch(e) {
    res.status(401).send('Invalid token');
  }
  
  try {
    const user = await User.findOne({ id });

    const response = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isBanned: user.isBanned,
    };

    res.send(response);
  } catch(e) {
    res.status(500).send('server error');
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.send('ok');
});

module.exports = router;
