const express = require('express');
const router = express.Router();
const CuentasController = require('../controllers/cuentasController');
const cuentasController = new CuentasController(); 

router.post('/', (req, res) => {
  cuentasController.agregar(req, res);
});

router.get('/', (req, res) => {
  const cuentas = cuentasController.listar();
  res.json(cuentas);
});

router.put('/:id', (req, res) => {
  cuentasController.editar(req, res);
});

router.delete('/:id', (req, res) => {
  cuentasController.eliminar(req, res);
});

router.get('/vista', (req, res) => {
  const cuentas = cuentasController.listar(req, res);
  res.render('cuentas', { cuentas });
});

module.exports = router;