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

  editar(req, res) {
    const id = parseInt(req.params.id);
    const producto = req.body;
    const index = this.productos.findIndex((p) => p.id === id);

    if (index === -1) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      this.productos[index] = producto;
      res.json(producto);
    }
  }

  eliminar(req, res) {
    const id = parseInt(req.params.id);
    const index = this.productos.findIndex((p) => p.id === id);

    if (index === -1) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      this.productos.splice(index, 1);
      res.status(204).end();
    }
  }
}

module.exports = new ProductosController();