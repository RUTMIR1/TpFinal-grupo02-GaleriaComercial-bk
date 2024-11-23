const Local = require('./local.js');
const Cuota = require('./cuota.js');
const sequelize = require('../database.js');  // Ajusta la ruta si es necesario
const { DataTypes } = require('sequelize');
const Usuario = require('./usuario.js');
const Alquiler = sequelize.define('Alquiler', {
  costoAlquiler: { type: DataTypes.FLOAT, allowNull: false },
  fechaAlquiler: { type: DataTypes.DATE, allowNull: false },
  fechaVencimiento: { type: DataTypes.DATE, allowNull: false },
  plazoMes: { type: DataTypes.INTEGER, allowNull: false },
}, { tableName: 'alquileres' });

// Relación con Usuario
Alquiler.belongsTo(Usuario, { foreignKey: 'propietarioId', as: 'propietario' });

// Relación con Local
Alquiler.belongsTo(Local, { foreignKey: 'localId', as: 'local' });

// Relación con Cuotas
Alquiler.hasMany(Cuota, { foreignKey: 'alquilerId', as: 'cuotas' });
Cuota.belongsTo(Alquiler, { foreignKey: 'alquilerId' });

module.exports = Alquiler;