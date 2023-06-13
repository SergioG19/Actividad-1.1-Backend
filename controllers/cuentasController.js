class CuentasController {
  constructor() {
    this.cuentas = [];
  }

  agregar(req, res) {
    const cuenta = req.body;
    this.cuentas.push(cuenta);
    res.status(201).json(cuenta);
  }

  listar(req, res) {
    res.json(this.cuentas);
  }

  editar(req, res) {
    const id = parseInt(req.params.id);
    const cuenta = req.body;
    const index = this.cuentas.findIndex((c) => c.id === id);

    if (index === -1) {
      res.status(404).json({ message: 'Cuenta no encontrada' });
    } else {
      this.cuentas[index] = cuenta;
      res.json(cuenta);
    }
  }

  eliminar(req, res) {
    const id = parseInt(req.params.id);
    const index = this.cuentas.findIndex((c) => c.id === id);

    if (index === -1) {
      res.status(404).json({ message: 'Cuenta no encontrada' });
    } else {
      this.cuentas.splice(index, 1);
      res.status(204).end();
    }
  }
}

module.exports = new CuentasController();