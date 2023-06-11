const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');

router.post('/', (req, res) => {
  cuentasController.agregar(req, res);
});

module.exports = router;