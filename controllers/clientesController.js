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
}

module.exports = new ClientesController();