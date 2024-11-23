const sequelize = require('../database.js');  // Ajusta la ruta si es necesario
const { DataTypes } = require('sequelize');
const Pago = require('./pago');

const Cuota = sequelize.define('Cuota', {
    numeroCuota: { type: DataTypes.INTEGER, allowNull: false },
    monto: { type: DataTypes.FLOAT, allowNull: false },
    fechaCuota: { type: DataTypes.DATE, allowNull: false },
    fechaVencimiento: { type: DataTypes.DATE, allowNull: false },
    estado: { type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'cuotas' });
  
  // Relación con Pago
  Cuota.hasMany(Pago, { foreignKey: 'cuotaId', as: 'pagos' });
  Pago.belongsTo(Cuota, { foreignKey: 'cuotaId' });
  
  module.exports = Cuota;