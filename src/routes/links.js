const express = require('express');
const router = express.Router();
// const pool = require('../database');

router.get('/formulariohve', (req, res) => {
  res.render('links/formHVE', {titleForm: 'HOJA DE VIDA DEL EQUIPO'});
});
router.post('/formulariohve', (req, res) => {
  const body = req.body;
  console.log('Cuerpo del formulario: ', body);
  res.redirect('/home');
});

router.get('/formulariomde', (req, res) => {
  res.render('links/formMDE', {titleForm: 'MANTENIMIENTO DE EQUIPOS'});
});

router.get('/formulariofte', (req, res) => {
  res.render('links/formFTE', {titleForm: 'FICHA TECNICA DEL EQUIPO'});
});

router.get('/formulariofre', (req, res) => {
  res.render('links/formFRE', {titleForm: 'FICHA DE REVISION DE EQUIPOS'});
});

module.exports = router;