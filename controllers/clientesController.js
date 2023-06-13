class ClientesController {
  constructor() {
    this.clientes = [];
  }

  agregar(req, res) {
    const cliente = req.body;
    this.clientes.push(cliente);
    res.status(201).json(cliente);
  }

  listar(req, res) {
    res.json(this.clientes);
  }

  editar(req, res) {
    const id = parseInt(req.params.id);
    const cliente = req.body;
    const index = this.clientes.findIndex((c) => c.id === id);

    if (index === -1) {
      res.status(404).json({ message: 'Cliente no encontrado' });
    } else {
      this.clientes[index] = cliente;
      res.json(cliente);
    }
  }

  eliminar(req, res) {
    const id = parseInt(req.params.id);
    const index = this.clientes.findIndex((c) => c.id === id);

    if (index === -1) {
      res.status(404).json({ message: 'Cliente no encontrado' });
    } else {
      this.clientes.splice(index, 1);
      res.status(204).end();
    }
  }
}

module.exports = new ClientesController();