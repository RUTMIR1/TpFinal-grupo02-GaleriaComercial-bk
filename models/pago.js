const sequelize = require('../database.js');  // Ajusta la ruta si es necesario
const { DataTypes } = require('sequelize');
const Usuario = require('./usuario.js');
const Pago = sequelize.define('Pago', {
    monto: { type: DataTypes.FLOAT, allowNull: false },
    estado: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    enlacePago: { type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'pagos' });
  
  // Relación con Usuario
  Pago.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });
  
  module.exports = Pago;