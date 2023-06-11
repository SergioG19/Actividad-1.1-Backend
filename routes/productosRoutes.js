const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.post('/', (req, res) => {
  productosController.agregar(req, res);
});

router.get('/', (req, res) => {
  productosController.listar(req, res);
});

module.exports = router;