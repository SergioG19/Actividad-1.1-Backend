const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.post('/', (req, res) => {
  productosController.agregar(req, res);
});

module.exports = router;