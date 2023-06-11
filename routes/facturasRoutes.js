const express = require('express');
const router = express.Router();
const facturasController = require('../controllers/facturasController');

router.post('/', (req, res) => {
  facturasController.agregar(req, res);
});

router.get('/', (req, res) => {
  facturasController.listar(req, res);
});

module.exports = router;