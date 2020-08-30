const express = require('express');
const router = express.Router();
// const pool = require('../database');

router.get('/formulariohve', (req, res) => {
  res.render('links/formHVE', {titleForm: 'HOJA DE VIDA DEL EQUIPO'});
});
router.get('/formulariomde', (req, res) => {
  res.render('links/formMDE', {titleForm: 'MANTENIMIENTO DE EQUIPOS'});
});

module.exports = router;