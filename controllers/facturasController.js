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

  editar(req, res) {
    const id = parseInt(req.params.id);
    const factura = req.body;
    const index = this.facturas.findIndex((f) => f.id === id);

    if (index === -1) {
      res.status(404).json({ message: 'Factura no encontrada' });
    } else {
      this.facturas[index] = factura;
      res.json(factura);
    }
  }

  eliminar(req, res) {
    const id = parseInt(req.params.id);
    const index = this.facturas.findIndex((f) => f.id === id);

    if (index === -1) {
      res.status(404).json({ message: 'Factura no encontrada' });
    } else {
      this.facturas.splice(index, 1);
      res.status(204).end();
    }
  }
}

module.exports = new FacturasController();