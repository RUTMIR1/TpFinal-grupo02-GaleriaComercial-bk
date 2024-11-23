const sequelize = require('../database.js');  // Ajusta la ruta si es necesario
const { DataTypes } = require('sequelize');
const Usuario = require('./usuario.js');
const Novedad = sequelize.define('Novedad', {
    fecha: { type: DataTypes.DATE, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    estado: { type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'novedades' });
  
  // Relación con Usuario
  Novedad.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });
  
  module.exports = Novedad;