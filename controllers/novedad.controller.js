const Novedad = require('../models/novedad');
const Usuario = require('../models/usuario');  // Asegúrate de que el modelo de Usuario esté importado correctamente
const NovedadCtrl = {};

NovedadCtrl.getNovedades = async (req, res) => {
  try {
    // Obtener todas las novedades y incluir el usuario relacionado
    const novedades = await Novedad.findAll({
      include: [{
        model: Usuario,    // Incluir datos del modelo Usuario
        required: true     // Para hacer una INNER JOIN (si se requiere el usuario relacionado)
      }]
    });
    res.json(novedades);
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al obtener las novedades",
      error: err
    });
  }
};

NovedadCtrl.createNovedad = async (req, res) => {
  try {
    // Crear una nueva novedad con Sequelize
    const novedad = await Novedad.create(req.body);
    res.status(200).json({
      status: "1",
      msg: "Novedad creada correctamente",
      novedad: novedad // Se puede devolver la novedad creada
    });
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al intentar crear la novedad",
      error: err
    });
  }
};

NovedadCtrl.getNovedad = async (req, res) => {
  try {
    // Obtener una novedad específica por su ID e incluir el usuario relacionado
    const novedad = await Novedad.findByPk(req.params.id, {
      include: [{
        model: Usuario,  // Incluir los datos del usuario
        required: true   // Para hacer una INNER JOIN
      }]
    });

    if (!novedad) {
      return res.status(404).json({
        status: "0",
        msg: "Novedad no encontrada"
      });
    }

    res.json(novedad);
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al obtener la novedad",
      error: err
    });
  }
};

NovedadCtrl.updateNovedad = async (req, res) => {
  try {
    // Actualizar una novedad existente
    const [updated] = await Novedad.update(req.body, {
      where: { id: req.params.id }  // Actualiza basado en el ID de la novedad
    });

    if (updated === 0) {
      return res.status(404).json({
        status: "0",
        msg: "Novedad no encontrada para actualizar"
      });
    }

    res.status(200).json({
      status: "1",
      msg: "Novedad modificada correctamente"
    });
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al intentar modificar la novedad",
      error: err
    });
  }
};

NovedadCtrl.deleteNovedad = async (req, res) => {
  try {
    // Eliminar una novedad
    const deleted = await Novedad.destroy({
      where: { id: req.params.id }
    });

    if (deleted === 0) {
      return res.status(404).json({
        status: "0",
        msg: "Novedad no encontrada para eliminar"
      });
    }

    res.status(200).json({
      status: "1",
      msg: "Novedad eliminada correctamente"
    });
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al intentar eliminar la novedad",
      error: err
    });
  }
};

module.exports = NovedadCtrl;