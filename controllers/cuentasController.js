class CuentasController {
  constructor() {
    this.cuentas = [];
  }

  agregar(req, res) {
    const cuenta = {
      id: req.body.id,
      nombre: req.body.nombre,
      tipo: req.body.tipo,
    };

    this.cuentas.push(cuenta);
    res.status(201).json(cuenta);
  }

  listar() {
    return this.cuentas;
  }

  editar(req, res) {
    const id = parseInt(req.params.id);
    const cuenta = req.body;
    const index = this.cuentas.findIndex((c) => c.id === id);
  
    if (index === -1) {
      res.status(404).json({ message: 'Cuenta no encontrada' });
    } else {
      this.cuentas.splice(index, 1);
      this.cuentas.push(cuenta);
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

module.exports = CuentasController; 