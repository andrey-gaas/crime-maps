const { Router } = require('express');
const emailValidator = require('email-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = Router();

router.post('/sign-up', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || name.length < 6 || name.length > 16) res.send('Имя должно содержать от 6 до 16 символов.');
    if (!name.match(/^\s*([0-9a-zA-Zа-яА-Я]*)\s*$/)) res.send('Допустимы только латинские и кириллические символы, а так же числа.');
    if (!emailValidator.validate(email)) res.send('Введите корректный E-Mail.');
    if (!password || password.length < 6 || password.length > 16) res.send('Пароль должен содержать от 6 до 16 символов.');
    if (!password.match(/^\s*([0-9a-zA-Z]*)\s*$/)) res.send('Допустимы только латинские символы и числа.');

    const candidate = await User.findOne({
      $or: [ { email }, { name } ],
    });

    if (candidate) {
      if (candidate.name === name) res.send('Имя уже занято. Попробуйте другое.');
      else res.send('Указанный E-Mail уже есть в системе. Попробуйте авторизоваться.')
    }

    const lastUser = await User.find({}).limit(1).sort({ $natural: -1 });

    const salt = bcrypt.genSaltSync(10);

    const user = new User({
      id: lastUser.length ? lastUser.id + 1 : 0,
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    try {
      await user.save();
      res.json(user);
    } catch (e) {
      res.json({ message: 'Ошибка создания пользователя. Попоробуйте еще раз.' });
    }

  } catch (e) {
    res.status(500).send('server error');
  }
});

module.exports = router;
