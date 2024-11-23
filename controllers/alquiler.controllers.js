const Alquiler = require("../models/alquiler");
const Usuario = require("../models/usuario");
const Local = require("../models/local");
const Cuota = require("../models/cuota");
const Pago = require("../models/pago");

const alquilerCtrl = {};

alquilerCtrl.getAlquileres = async (req, res) => {
  try {
    const alquileres = await Alquiler.findAll({
      include: [
        { model: Usuario, as: 'propietario' },
        { model: Local, as: 'local' },
        {
          model: Cuota,
          as: 'cuotas',
          include: { model: Pago, as: 'pagos' }
        }
      ]
    });
    res.json(alquileres);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error al obtener alquileres.",
      error: error
    });
  }
};

alquilerCtrl.createAlquiler = async (req, res) => {
  const alquiler = new Alquiler(req.body);
  try {
    await alquiler.save();
    res.json({
      status: "1",
      msg: "Alquiler guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
      error: error
    });
  }
};

alquilerCtrl.getAlquiler = async (req, res) => {
  try {
    const alquiler = await Alquiler.findOne({
      where: { id: req.params.id },
      include: [
        { model: Usuario, as: 'propietario' },
        { model: Local, as: 'local' },
        {
          model: Cuota,
          as: 'cuotas',
          include: { model: Pago, as: 'pagos' }
        }
      ]
    });
    if (alquiler) {
      res.status(200).json(alquiler);
    } else {
      res.status(404).json({ status: "0", msg: "Alquiler no encontrado." });
    }
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al intentar obtener el alquiler.",
      error: err
    });
  }
};

alquilerCtrl.editAlquiler = async (req, res) => {
  try {
    const alquiler = await Alquiler.update(req.body, {
      where: { id: req.body.id }
    });
    if (alquiler[0] > 0) {
      res.json({
        status: "1",
        msg: "Alquiler actualizado"
      });
    } else {
      res.status(404).json({
        status: "0",
        msg: "Alquiler no encontrado."
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operación.",
      error: error
    });
  }
};

alquilerCtrl.deleteAlquiler = async (req, res) => {
  try {
    const result = await Alquiler.destroy({ where: { id: req.params.id } });
    if (result > 0) {
      res.json({
        status: "1",
        msg: "Alquiler eliminado.",
      });
    } else {
      res.status(404).json({
        status: "0",
        msg: "Alquiler no encontrado."
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operación.",
      error: error
    });
  }
};

module.exports = alquilerCtrl;