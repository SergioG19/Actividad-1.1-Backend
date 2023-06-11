class ClientesController {
  constructor() {
    this.clientes = [];
  }

  agregar(req, res) {
    const cliente = req.body;
    this.clientes.push(cliente);
    res.status(201).json(cliente);
  }
}

module.exports = new ClientesController();