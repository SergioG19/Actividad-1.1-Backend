const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const cuentasRoutes = require('./routes/cuentasRoutes')
const clientesRoutes = require('./routes/clientesRoutes');
const facturasRoutes = require('./routes/facturasRoutes');
const productosRoutes = require('./routes/productosRoutes');

const app = express();

// Configurar el motor de plantillas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.use('/cuentas', cuentasRoutes);
app.use('/clientes', clientesRoutes);
app.use('/facturas', facturasRoutes);
app.use('/productos', productosRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
