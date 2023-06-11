class ProductosController {
  constructor() {
    this.productos = [];
  }

  agregar(req, res) {
    const producto = req.body;
    this.productos.push(producto);
    res.status(201).json(producto);
  }

  listar(req, res) {
    res.json(this.productos);
  }
}

module.exports = new ProductosController();