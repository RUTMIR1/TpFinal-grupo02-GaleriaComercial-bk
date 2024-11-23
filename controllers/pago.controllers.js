const Pago = require('../models/pago');
const Usuario = require('../models/usuario');  // Asegúrate de que el modelo Usuario esté importado correctamente
const pagoCtrl = {};

pagoCtrl.getPagos = async (req, res) => {
  try {
    // Obtener todos los pagos e incluir el usuario relacionado
    const pagos = await Pago.findAll({
      include: [{
        model: Usuario,    // Incluir datos del modelo Usuario
        required: true     // Para hacer una INNER JOIN (si se requiere el usuario relacionado)
      }]
    });
    res.json(pagos);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error al obtener los pagos",
      error: error
    });
  }
};

pagoCtrl.createPago = async (req, res) => {
  try {
    // Crear un nuevo pago con Sequelize
    const pago = await Pago.create(req.body);
    res.status(200).json({
      status: "1",
      msg: "Pago guardado",
      pagoGuardado: pago // Se puede devolver el pago creado
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operación",
      error: error
    });
  }
};

pagoCtrl.getPago = async (req, res) => {
  try {
    // Obtener un pago específico por su ID e incluir el usuario relacionado
    const pago = await Pago.findByPk(req.params.id, {
      include: [{
        model: Usuario,  // Incluir los datos del usuario
        required: true   // Para hacer una INNER JOIN
      }]
    });

    if (!pago) {
      return res.status(404).json({
        status: "0",
        msg: "Pago no encontrado"
      });
    }

    res.status(200).json(pago);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error al obtener el pago",
      error: error
    });
  }
};

pagoCtrl.editPago = async (req, res) => {
  try {
    // Actualizar un pago existente
    const [updated] = await Pago.update(req.body, {
      where: { id: req.body.id }  // Actualiza basado en el ID de la novedad
    });

    if (updated === 0) {
      return res.status(404).json({
        status: "0",
        msg: "Pago no encontrado para actualizar"
      });
    }

    res.status(200).json({
      status: "1",
      msg: "Pago actualizado"
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operación",
      error: error
    });
  }
};

module.exports = pagoCtrl;