const { Router } = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const emailValidator = require('email-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = Router();

const cookieAge = { expires: new Date(Date.now() + 31536000000) };

router.post('/account/name', auth, async (req, res) => {
  const { name } = req.body;
  const token = req.cookies.token.split(' ')[1];
  let id;

  try {
    id = jwt.verify(token, config.get('jwt')).id;
  } catch(e) {
    res.status(401).send('Invalid token');
  }

  if (!name) return res.send('Введите новое имя.');
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
    res.send('OK');
  } catch(e) {
    res.status(500).send('server error');
  }
});

router.post('/account/email', auth, async (req, res) => {
  const { email } = req.body;
  const token = req.cookies.token.split(' ')[1];
  let tokensData;

  try {
    tokensData = jwt.verify(token, config.get('jwt'));
  } catch(e) {
    return res.status(401).send('Invalid token');
  }

  const { id, currentEmail } = tokensData;

  if (!email) return res.send('Введите новый E-Mail.');
  if (email === currentEmail) return res.send('Придумайте новый E-Mail.');
  if (!emailValidator.validate(email)) return res.send('Введите корректный E-Mail');

  try {
    const user = await User.findOne({ email });
    if (user) return res.send('E-Mail занят. Попробуйте другой.');
  } catch (e) {
    return res.status(500).send('server error');
  }

  try {
    await User.findOneAndUpdate({ id }, { email });

    const token = jwt.sign(
      { email, id },
      config.get('jwt'),
    );

    res.cookie('token', `Bearer ${token}`, cookieAge);
    res.send('OK');
  } catch(e) {
    res.status(500).send('server error');
  }
});

router.post('/account/password', auth, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const token = req.cookies.token.split(' ')[1];
  let id;

  try {
    id = jwt.verify(token, config.get('jwt')).id;
  } catch(e) {
    res.status(401).send('Invalid token');
  }

  if (!oldPassword)
    return res.json({ field: 'oldPassword', message: 'Введите корректный пароль.' });
  if (oldPassword.length < 6 || oldPassword.length > 16 || !oldPassword.match(/^\s*([0-9a-zA-Z]*)\s*$/))
    return res.json({ field: 'oldPassword', message: 'Введите корректный пароль.' });
  if (!newPassword)
    return res.json({ field: 'newPassword', message: 'Введите новый пароль.' });
  if (oldPassword === newPassword)
    return res.json({ field: 'newPassword', message: 'Придумайте новый пароль' });
  if (oldPassword.length < 6 || oldPassword.length > 16 || !oldPassword.match(/^\s*([0-9a-zA-Z]*)\s*$/))
    return res.json({ field: 'newPassword', message: 'Пароль должен содержать от 6 до 16 символов латинского алфавита или цифр.' });

  try {
    const user = await User.findOne({ id });
    const isOldPasswordMatch = bcrypt.compareSync(oldPassword, user.password);

    if (isOldPasswordMatch) {
      const salt = bcrypt.genSaltSync(10);
      const password = bcrypt.hashSync(newPassword, salt);

      await User.updateOne({ id }, { password });

      res.send('OK');
    } else {
      res.send({ field: 'oldPassword', message: 'Вы ввели неверный пароль.' });
    }
  } catch (e) {
    console.log(e.message);
    res.json({ field: 'oldPassword', message: 'Произошла неизвестная ошибка. Перезагрузите страницу и попробуйте еще раз.' })
  }

});

module.exports = router;
