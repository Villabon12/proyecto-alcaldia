const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/formulariohve', async (req, res) => {
  const secretaria = await pool.query(`SELECT * FROM secretaria`);
  const dependencia = await pool.query(`SELECT * FROM dependencia`);
  const cargo = await pool.query(`SELECT * FROM cargo`);
  const area = await pool.query(`SELECT * FROM area_trabajo`);
  const empresa = await pool.query(`SELECT * FROM empresa_proveedor`);
  const tipo_ordenador = await pool.query(`SELECT * FROM tipo_equipo`);
  const tipo_compra = await pool.query(`SELECT * FROM tipo_compra`);
  const tipo_disco = await pool.query(`SELECT * FROM tipo_disco`);
  const tipo_ram = await pool.query(`SELECT * FROM tipo_ram`);
  const procesador = await pool.query(`SELECT * FROM marca_procesador`);
  const marcaOrdenador = await pool.query(`SELECT * FROM marca_pc`);

  res.render('links/formHVE', {
    titleForm: 'HOJA DE VIDA DEL EQUIPO',
    secretaria, dependencia, cargo, area, empresa,
    tipo_ordenador, tipo_compra, tipo_disco, tipo_ram, procesador,
    marcaOrdenador
  });
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