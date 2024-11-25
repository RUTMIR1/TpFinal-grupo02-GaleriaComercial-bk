const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const { mongoose } = require('./database');
const client = require("prom-client"); // Importa prom-client
const indexRouter = require("./routes/index");

const app = express();

dotenv.config();

app.use(express.json()); // Para parsear JSON
// Configurar CORS
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Configuración de Prometheus
const register = new client.Registry(); // Crear un registro personalizado
client.collectDefaultMetrics({ register }); // Colectar métricas estándar

// Métrica personalizada: contador de peticiones
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total', // Nombre de la métrica
  help: 'Total de peticiones HTTP recibidas', // Descripción
  labelNames: ['method', 'route', 'status'], // Etiquetas
});

// Métrica personalizada: histograma de duración de las peticiones
const httpRequestDurationHistogram = new client.Histogram({
  name: 'http_request_duration_seconds', // Nombre de la métrica
  help: 'Duración de las solicitudes HTTP en segundos', // Descripción
  labelNames: ['method', 'route', 'status'], // Etiquetas
  buckets: [0.1, 0.3, 1.5, 5, 10], // Rangos de duración en segundos
});

register.registerMetric(httpRequestCounter); // Registrar el contador
register.registerMetric(httpRequestDurationHistogram); // Registrar el histograma

// Middleware para registrar las peticiones
app.use((req, res, next) => {
  const end = httpRequestDurationHistogram.startTimer(); // Inicia el temporizador

  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.originalUrl, // Ruta solicitada
      status: res.statusCode, // Código de estado
    });

    end({
      method: req.method,
      route: req.route ? req.route.path : req.originalUrl, // Ruta solicitada
      status: res.statusCode, // Código de estado
    });
  });

  next();
});

// Exponer las métricas en el endpoint /metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.send(await register.metrics());
});

// Rutas de la aplicación
app.use("/", indexRouter);
app.use('/api/usuario', require('./routes/usuario.route'));
app.use('/api/cuota', require('./routes/cuota.route'));
app.use('/api/novedad', require('./routes/novedad.route'));
app.use('/api/pago', require('./routes/pago.route'));
app.use('/api/alquiler', require('./routes/alquiler.route'));
app.use('/api/local', require('./routes/local.route'));
app.use('/api/promocion', require('./routes/promocion.route'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});

module.exports = app;
