const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Promocion = sequelize.define('Promocion', {
    pathing: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'promociones' });
  
  module.exports = Promocion;