class FacturasController {
  constructor() {
    this.facturas = [];
  }

  agregar(req, res) {
    const factura = {
      id: req.body.id,
      cliente: req.body.cliente,
      fecha: req.body.fecha,
      total: req.body.total,
    };

    this.facturas.push(factura);
    res.status(201).json(factura);
  }

  listar() {
    return this.facturas;
  }

  editar(req, res) {
    const id = parseInt(req.params.id);
    const factura = req.body;
    const index = this.facturas.findIndex((f) => f.id === id);

    if (index === -1) {
      res.status(404).json({ message: 'Factura no encontrada' });
    } else {
      this.facturas.splice(index, 1);
      this.facturas.push(factura);
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

const facturasController = new FacturasController(); 
module.exports = facturasController; 