class CuentasController {
  constructor() {
    this.cuentas = [];
  }

  agregar(req, res) {
    const cuenta = req.body;
    this.cuentas.push(cuenta);
    res.status(201).json(cuenta);
  }
}

module.exports = new CuentasController();