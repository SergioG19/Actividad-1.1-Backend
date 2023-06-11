const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.post('/', (req, res) => {
  clientesController.agregar(req, res);
});

module.exports = router;