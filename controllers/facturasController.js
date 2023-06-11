class FacturasController {
  constructor() {
    this.facturas = [];
  }

  agregar(req, res) {
    const factura = req.body;
    this.facturas.push(factura);
    res.status(201).json(factura);
  }

}

module.exports = new FacturasController();