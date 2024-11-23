const Local = require('../models/local');
const localCtrl = {};

localCtrl.getLocales = async (req, res) => {
  try {
    // Obtener todos los locales con Sequelize
    const locales = await Local.findAll();
    res.json(locales);
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al obtener los locales.",
      error: err
    });
  }
};

localCtrl.createLocal = async (req, res) => {
  try {
    // Crear un nuevo local con Sequelize
    const local = await Local.create(req.body);
    res.status(200).json({
      status: "1",
      msg: "Local guardado.",
      local: local // Puedes devolver el objeto local creado
    });
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operación.",
      error: err
    });
  }
};

localCtrl.getLocal = async (req, res) => {
  try {
    // Obtener un local específico por ID
    const local = await Local.findByPk(req.params.id); // findByPk es el equivalente a findById en Sequelize
    if (!local) {
      return res.status(404).json({
        status: "0",
        msg: "Local no encontrado."
      });
    }
    res.json(local);
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al obtener el local.",
      error: err
    });
  }
};

localCtrl.updateLocal = async (req, res) => {
  try {
    // Actualizar un local
    const [updated] = await Local.update(req.body, {
      where: { id: req.params.id }  // `id` es el nombre de la columna primaria en la base de datos
    });

    if (updated === 0) {
      return res.status(404).json({
        status: "0",
        msg: "No se encontró el local para actualizar."
      });
    }

    res.status(200).json({
      status: "1",
      msg: "Local actualizado."
    });
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al intentar realizar la operación.",
      error: err
    });
  }
};

localCtrl.deleteLocal = async (req, res) => {
  try {
    // Eliminar un local
    const deleted = await Local.destroy({
      where: { id: req.params.id }
    });

    if (deleted === 0) {
      return res.status(404).json({
        status: "0",
        msg: "No se encontró el local para eliminar."
      });
    }

    res.status(200).json({
      status: "1",
      msg: "Local eliminado correctamente."
    });
  } catch (err) {
    res.status(400).json({
      status: "0",
      msg: "Error al intentar realizar la operación.",
      error: err
    });
  }
};

module.exports = localCtrl;