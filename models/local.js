const sequelize = require('../database.js');  // Ajusta la ruta si es necesario
const { DataTypes } = require('sequelize');
const Promocion = require('./promocion.js');
const Local = sequelize.define('Local', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    superficie: { type: DataTypes.INTEGER, allowNull: false },
    habilitado: { type: DataTypes.BOOLEAN, allowNull: false },
    pathimages: { type: DataTypes.STRING, allowNull: false },
    alquilado: { type: DataTypes.BOOLEAN, allowNull: false },
    costoMes: { type: DataTypes.FLOAT, allowNull: false },
  }, { tableName: 'locales' });
  
  // Relación con Promocion
  Local.hasMany(Promocion, { foreignKey: 'localId', as: 'promociones' });
  Promocion.belongsTo(Local, { foreignKey: 'localId' });
  
  module.exports = Local;
