class ProductosController {
  constructor() {
    this.productos = [];
  }

  agregar(req, res) {
    const producto = req.body;
    this.productos.push(producto);
    res.status(201).json(producto);
  }

}

module.exports = new ProductosController();