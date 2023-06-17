const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');

router.post('/', (req, res) => {
  cuentasController.agregar(req, res);
});

router.get('/', (req, res) => {
  cuentasController.listar(req, res);
});

router.put('/:id', (req, res) => {
  cuentasController.editar(req, res);
});

router.delete('/:id', (req, res) => {
  cuentasController.eliminar(req, res);
});

module.exports = router;