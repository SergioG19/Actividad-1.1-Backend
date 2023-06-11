class FacturasController {
  constructor() {
    this.facturas = [];
  }

  agregar(req, res) {
    const factura = req.body;
    this.facturas.push(factura);
    res.status(201).json(factura);
  }
  
  listar(req, res) {
    res.json(this.facturas);
  }
}

module.exports = new FacturasController();