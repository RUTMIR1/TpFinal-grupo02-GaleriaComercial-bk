const Promocion = require('../models/promocion');
const promocionCtrl = {};

promocionCtrl.getPromociones = async (req, res) => {
  try {
    // Obtener todas las promociones con Sequelize
    const promociones = await Promocion.findAll();
    res.json(promociones);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error al obtener las promociones",
      error: error
    });
  }
};

promocionCtrl.createPromocion = async (req, res) => {
  try {
    // Crear una nueva promoción con Sequelize
    const promocion = await Promocion.create(req.body);
    res.status(200).json({
      status: "1",
      msg: "Promoción guardada",
      promocionGuardada: promocion
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operación",
      error: error
    });
  }
};

promocionCtrl.getPromocion = async (req, res) => {
  try {
    // Obtener una promoción específica por su ID
    const promocion = await Promocion.findByPk(req.params.id);

    if (!promocion) {
      return res.status(404).json({
        status: "0",
        msg: "Promoción no encontrada"
      });
    }

    res.status(200).json(promocion);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error al obtener la promoción",
      error: error
    });
  }
};

promocionCtrl.editPromocion = async (req, res) => {
  try {
    // Actualizar una promoción existente por su ID
    const [updated] = await Promocion.update(req.body, {
      where: { id: req.body.id }  // Actualiza basado en el ID de la promoción
    });

    if (updated === 0) {
      return res.status(404).json({
        status: "0",
        msg: "Promoción no encontrada para actualizar"
      });
    }

    res.status(200).json({
      status: "1",
      msg: "Promoción actualizada"
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operación",
      error: error
    });
  }
};

promocionCtrl.deletePromocion = async (req, res) => {
  try {
    // Eliminar una promoción por su ID
    const deleted = await Promocion.destroy({
      where: { id: req.params.id }
    });

    if (deleted === 0) {
      return res.status(404).json({
        status: "0",
        msg: "Promoción no encontrada para eliminar"
      });
    }

    res.status(200).json({
      status: "1",
      msg: "Promoción eliminada correctamente"
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operación",
      error: error
    });
  }
};

module.exports = promocionCtrl;