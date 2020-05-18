const { Router } = require('express');
const emailValidator = require('email-validator');
const User = require('../models/User');

const router = Router();

router.post('/sign-up', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || name.length < 6 || name.length > 16) res.status(400).send('Имя должно содержать от 6 до 16 символов.');
    if (!name.match(/^\s*([0-9a-zA-Zа-яА-Я]*)\s*$/)) res.status(400).send('Допустимы только латинские и кириллические символы, а так же числа.');
    if (!emailValidator.validate(email)) res.status(400).send('Введите корректный E-Mail.');
    if (!password || password.length < 6 || password.length > 16) res.status(400).send('Пароль должен содержать от 6 до 16 символов.');
    if (!password.match(/^\s*([0-9a-zA-Z]*)\s*$/)) res.status(400).send('Допустимы только латинские символы и числа.');

    const candidate = await User.findOne({
      $or: [ { email }, { name } ],
    });

    if (candidate) {
      if (candidate.name === name) res.status(409).send('Имя уже занято. Попробуйте другое.');
      else res.status(409).send('Указанный E-Mail уже есть в системе. Попробуйте авторизоваться.')
    }

    res.send('ok');

  } catch (e) {
    res.status(500).send('server error');
  }
});

module.exports = router;
