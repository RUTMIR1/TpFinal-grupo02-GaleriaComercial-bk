const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const { mongoose } = require('./database');

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