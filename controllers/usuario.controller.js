const Usuario = require('../models/usuario');
const UsuarioCtrl = {};

UsuarioCtrl.createUsuario = async (req, res) => {
  try {
    // Crear un nuevo usuario con Sequelize
    const usuario = await Usuario.create(req.body);
    res.status(201).json({
      status: 1,
      msg: "Usuario creado correctamente",
      usuario: usuario
    });
  } catch (err) {
    res.status(400).json({
      status: 0,
      msg: "Error al intentar realizar la operación",
      error: err
    });
  }
};

UsuarioCtrl.updateUsuario = async (req, res) => {
  try {
    // Actualizar un usuario por su ID usando Sequelize
    const [updated] = await Usuario.update(req.body, {
      where: { id: req.params.id }  // Usamos el ID para identificar el usuario
    });

    if (updated === 0) {
      return res.status(404).json({
        status: 0,
        msg: "Usuario no encontrado para actualizar"
      });
    }

    res.status(200).json({
      status: 1,
      msg: "Usuario actualizado correctamente"
    });
  } catch (err) {
    res.status(400).json({
      status: 0,
      msg: "Error al intentar realizar la operación",
      error: err
    });
  }
};

UsuarioCtrl.deleteUsuario = async (req, res) => {
  try {
    // Eliminar un usuario por su ID usando Sequelize
    const deleted = await Usuario.destroy({
      where: { id: req.params.id }
    });

    if (deleted === 0) {
      return res.status(404).json({
        status: 0,
        msg: "Usuario no encontrado para eliminar"
      });
    }

    res.status(200).json({
      status: 1,
      msg: "Usuario eliminado correctamente"
    });
  } catch (err) {
    res.status(400).json({
      status: 0,
      msg: "Error al intentar realizar la operación",
      error: err
    });
  }
};

UsuarioCtrl.getUsuarios = async (req, res) => {
  try {
    // Obtener todos los usuarios con Sequelize
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(400).json({
      status: 0,
      msg: "Error al obtener los usuarios",
      error: err
    });
  }
};

UsuarioCtrl.getUsuarioById = async (req, res) => {
  try {
    // Obtener un usuario específico por su ID usando Sequelize
    const usuario = await Usuario.findByPk(req.params.id);  // findByPk es el equivalente a findOne en Sequelize

    if (!usuario) {
      return res.status(404).json({
        status: 0,
        msg: "Usuario no encontrado"
      });
    }

    res.status(200).json(usuario);
  } catch (err) {
    res.status(400).json({
      status: 0,
      msg: "Error al obtener el usuario",
      error: err
    });
  }
};

UsuarioCtrl.loginUsuario = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Buscar el usuario por nombre de usuario y contraseña (cuidado con la seguridad aquí)
    const user = await Usuario.findOne({
      where: {
        username: username,
        password: password
      }
    });

    if (!user) {
      return res.json({
        status: 0,
        msg: "Usuario no encontrado"
      });
    }

    res.json({
      status: 1,
      msg: "Inicio de sesión exitoso",
      username: user.username,  // Información útil para el frontend
      perfil: user.perfil,      // Información útil para el frontend
      userid: user.id           // Información útil para el frontend
    });
  } catch (error) {
    res.json({
      status: 0,
      msg: 'Error en el proceso de inicio de sesión'
    });
  }
};

UsuarioCtrl.getUsuariosByPerfil = async (req, res) => {
  try {
    // Obtener los usuarios por su perfil
    const usuarios = await Usuario.findAll({
      where: { perfil: req.params.tipo }  // Usamos el parámetro 'tipo' de la ruta para filtrar
    });

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({
      status: 0,
      msg: "Error al intentar obtener los usuarios por perfil",
      error: error
    });
  }
};

module.exports = UsuarioCtrl;