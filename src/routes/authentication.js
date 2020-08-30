const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('layouts/login');
});

router.get('/register', (req, res) => {
  res.render('layouts/register');
});

module.exports = router;